import * as THREE from 'three';
import TWEEN from 'tween.js';

import { camera, renderer, scene } from './three';

import './events';
import './meshes';

import cubes from './cubes';

const clock = new THREE.Clock();

const animate = () => {
    cubes.animate(clock.getDelta());
    TWEEN.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};
animate();
