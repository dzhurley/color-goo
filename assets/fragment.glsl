uniform vec3 uPhotosPosition;
uniform vec3 uMusicPosition;
uniform vec3 uCodePosition;

varying vec3 vNormal;
varying vec3 vPos;

void main() {
  gl_FragColor = vec4(
    smoothstep(0.0, 200.0, distance(vPos, uPhotosPosition)),
    smoothstep(0.0, 200.0, distance(vPos, uMusicPosition)),
    smoothstep(0.0, 200.0, distance(vPos, uCodePosition)),
    1.0
  );
}
