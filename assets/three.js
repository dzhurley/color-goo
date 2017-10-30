import * as THREE from 'three';
import 'three-examples/controls/OrbitControls';

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.gammaInput = true;
renderer.gammaOutput = true;
document.body.appendChild(renderer.domElement);

export const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
camera.position.set(500, 0, 500);

export const controls = new THREE.OrbitControls(camera, renderer.domElement);

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

export const points = [
    new THREE.PointLight(0xffffff),
    new THREE.PointLight(0xffffff),
    new THREE.PointLight(0xffffff),
];
points[0].position.set(-300, 600, -300);
points[1].position.set(300, 300, 300);
points[2].position.set(-300, -600, -300);

points.map(p => scene.add(p));
