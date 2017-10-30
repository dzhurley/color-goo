uniform vec3 uLightPosition0;
uniform vec3 uLightPosition1;
uniform vec3 uLightPosition2;

varying vec3 lightDir0;
varying vec3 lightDir1;
varying vec3 lightDir2;

varying vec3 vertPos;
varying vec3 worldPos;

void main(){
  worldPos = (modelMatrix * vec4(position, 1.0)).xyz;

  vec4 vertPos4 = modelViewMatrix * vec4(position, 1.0);
  vertPos = vec3(vertPos4) / vertPos4.w;

  vec3 normalInterp = normalMatrix * normal;

  lightDir0 = normalize((viewMatrix * vec4(uLightPosition0, 1.0)).xyz - vertPos);
  lightDir1 = normalize((viewMatrix * vec4(uLightPosition1, 1.0)).xyz - vertPos);
  lightDir2 = normalize((viewMatrix * vec4(uLightPosition2, 1.0)).xyz - vertPos);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
