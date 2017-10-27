uniform vec3 uPhotosPosition;
uniform vec3 uMusicPosition;
uniform vec3 uCodePosition;

uniform vec3 uLightPosition0;
uniform vec3 uLightPosition1;
uniform vec3 uLightPosition2;

varying vec3 normalInterp;
varying vec3 vertPos;
varying vec3 worldPos;

const vec3 specColor = vec3(0.5, 0.5, 0.5);
const float shininess = 12.0;
const float screenGamma = 2.2; // Assume the monitor is calibrated to the sRGB color space

vec3 calcLight(vec3 pos, vec3 diffuseColor, vec3 normal) {
  vec3 lightDir = normalize((viewMatrix * vec4(pos, 1.0)).xyz - vertPos);
  float lambertian = max(dot(lightDir, normal), 0.0);
  float specular = 0.0;

  if (lambertian > 0.0) {
    vec3 viewDir = normalize(-vertPos);

    // this is phong
    vec3 reflectDir = reflect(-lightDir, normal);
    float specAngle = max(dot(reflectDir, viewDir), 0.0);
    // note that the exponent is different here
    specular = pow(specAngle, shininess / 4.0);
  }

  return (diffuseColor * 0.1) + lambertian * diffuseColor + specular * specColor;
}

void main() {
  vec3 diffuseColor = vec3(
    smoothstep(0.0, 255.0, distance(worldPos, uPhotosPosition)),
    smoothstep(0.0, 255.0, distance(worldPos, uMusicPosition)),
    smoothstep(0.0, 255.0, distance(worldPos, uCodePosition))
  );

  vec3 normal = normalize(normalInterp);

  vec3 l0 = calcLight(uLightPosition0, diffuseColor, normal);
  vec3 l1 = calcLight(uLightPosition1, diffuseColor, normal);
  vec3 l2 = calcLight(uLightPosition2, diffuseColor, normal);

  vec3 colorLinear = l0 + l1 + l2;

  // apply gamma correction (assume ambientColor, diffuseColor and specColor
  // have been linearized, i.e. have no gamma correction in them)
  vec3 colorGammaCorrected = pow(colorLinear, vec3(1.0 / screenGamma));
  // use the gamma corrected color in the fragment
  gl_FragColor = vec4(colorGammaCorrected, 1.0);
}
