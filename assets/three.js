import * as THREE from 'three';
import 'three-examples/controls/OrbitControls';

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.gammaInput = true;
renderer.gammaOutput = true;
document.body.appendChild(renderer.domElement);

export const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
camera.position.set(500, 0, 500);

export const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 85;
controls.maxDistance = 1500;

export const scene = new THREE.Scene();

export const points = [
    new THREE.PointLight(0xFFFFFF),
    new THREE.PointLight(0xFFFFFF),
    new THREE.PointLight(0xFFFFFF),
];
points[0].position.set(-300, 600, -300);
points[1].position.set(300, 300, 300);
points[2].position.set(-300, -600, -300);

points.map(p => scene.add(p));
