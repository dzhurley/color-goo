import * as THREE from 'three';
import TWEEN from 'tween.js';

import { camera, renderer, scene } from './three';
import './events';

import cubes from './cubes';

const clock = new THREE.Clock();
let time = 0;

const animate = () => {
    time += clock.getDelta() * 0.5;
    cubes.animate(time);
    TWEEN.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};
animate();
