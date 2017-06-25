import * as THREE from 'three';
import TWEEN from 'tween.js';

import { onClick, onResize } from './events';
import { me, photos, music, code } from './shapes';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 9000);
onResize(camera, renderer);
camera.position.z = 200;

[[200, 200, 200], [-200, 200, -200], [0, 0, 200]].forEach(pos => {
    let light = new THREE.PointLight();
    light.position.set(...pos);
    scene.add(light);
});

const allShapes = [me, photos, music, code];
scene.add(...allShapes);

const animate = () => {
    allShapes.forEach(shape => {
        shape.rotation.x += 0.04;
        shape.rotation.y += 0.02;
        shape.rotation.z += 0.03;
    });
    TWEEN.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};

document.body.appendChild(renderer.domElement);
animate();

onClick(camera, me, () => [photos, music, code].forEach(shape => {
    new TWEEN.Tween(shape.scale).to({ x: 1, y: 1, z: 1 }, 500).start();
    new TWEEN.Tween(shape.position).to(shape.userData.endPosition, 500).start();
}));
