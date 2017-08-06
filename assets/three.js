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
camera.position.set(-500, 500, 500);

export const controls = new THREE.OrbitControls(camera, renderer.domElement);

export const scene = new THREE.Scene();

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0.5, 0.5, 1);
const pointLight = new THREE.PointLight(0xff3300);
pointLight.position.set(0, 0, 100);
const ambientLight = new THREE.AmbientLight(0x080808);

scene.add(ambientLight, pointLight, light);
