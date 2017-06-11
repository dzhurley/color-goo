import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 9000);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
camera.position.z = 200;

const light = new THREE.PointLight();
light.position.set(200, 200, 200);
scene.add(light);

const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({ color: 0xff0000 })
);
scene.add(box);

const animate = () => {
    box.rotation.x += 0.04;
    box.rotation.y += 0.02;
    box.rotation.z += 0.03;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};

document.body.appendChild(renderer.domElement);
animate();
