uniform vec3 uPhotosPosition;
uniform vec3 uMusicPosition;
uniform vec3 uCodePosition;

varying vec3 vNormal;
varying vec3 vPos;

void main() {
  float distPhotos = distance(vPos, uPhotosPosition);
  float distMusic = distance(vPos, uMusicPosition);
  float distCode = distance(vPos, uCodePosition);

  if (distPhotos < distMusic) {
    if (distPhotos < distCode) {
      // photos is closest
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else {
      // code is closest
      gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
  } else {
    if (distMusic < distCode) {
      // music is closest
      gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    } else {
      // code is closest
      gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
  }
}
