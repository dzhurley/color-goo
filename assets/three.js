import * as THREE from 'three';

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 9000);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
camera.position.z = 200;

export const scene = new THREE.Scene();

export const lights = {
    object: new THREE.Group(),
    animate() {
        this.object.rotation.x += 0.005;
        this.object.rotation.y += 0.005;
        this.object.rotation.z += 0.005;
    }
};
[[1000, 0, 0], [-1000, 0, 0], [0, 1000, 0], [0, -1000, 0], [0, 0, 1000], [0, 0, -1000]].forEach(pos => {
    let light = new THREE.PointLight();
    light.position.set(...pos);
    lights.object.add(light);
});
scene.add(lights.object);
