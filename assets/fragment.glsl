uniform vec3 uCyanPosition;
uniform vec3 uMagentaPosition;
uniform vec3 uYellowPosition;

varying vec3 lightDir0;
varying vec3 lightDir1;
varying vec3 lightDir2;

varying vec3 vertPos;
varying vec3 worldPos;

varying vec3 normalInterp;

const vec3 specColor = vec3(1.0, 1.0, 1.0);
const float shininess = 30.0;
const float screenGamma = 2.2; // Assume the monitor is calibrated to the sRGB color space

vec3 calcLight(vec3 direction, vec3 diffuseColor, vec3 normal) {
  float lambertian = max(dot(direction, normal), 0.0);
  float specular = 0.0;

  if (lambertian > 0.0) {
    vec3 viewDir = normalize(-vertPos);
    vec3 reflectDir = reflect(-direction, normal);
    float specAngle = max(dot(reflectDir, viewDir), 0.0);
    specular = pow(specAngle, shininess);
  }

  return (diffuseColor * 0.01) + lambertian * diffuseColor + specular * specColor;
}

void main() {
  vec3 diffuseColor = vec3(
    smoothstep(0.0, 255.0, distance(worldPos, uCyanPosition)),
    smoothstep(0.0, 255.0, distance(worldPos, uMagentaPosition)),
    smoothstep(0.0, 255.0, distance(worldPos, uYellowPosition))
  );

  vec3 normal = normalize(normalInterp);
  vec3 l0 = calcLight(lightDir0, diffuseColor, normal);
  vec3 l1 = calcLight(lightDir1, diffuseColor, normal);
  vec3 l2 = calcLight(lightDir2, diffuseColor, normal);
  vec3 colorLinear = l0 + l1 + l2;

  vec3 colorGammaCorrected = pow(colorLinear, vec3(1.0 / screenGamma));
  gl_FragColor = vec4(colorGammaCorrected, 1.0);
}
