varying vec3 vNormal;
varying vec3 vRefract;

void main() {

  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  vec3 worldNormal = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );

  vNormal = normalize( normalMatrix * normal );

  vec3 I = worldPosition.xyz - cameraPosition;
  vRefract = refract( normalize( I ), worldNormal, 1.02 );

  gl_Position = projectionMatrix * mvPosition;

}
