import * as THREE from 'three';
import TWEEN from 'tween.js';
import Stats from 'stats.js';

import { camera, renderer, scene } from './three';
import './events';

import cubes from './cubes';
import meshes from './meshes';

const clock = new THREE.Clock();

const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const animate = () => {
    stats.begin();
    meshes.animate();
    cubes.animate(clock.getDelta());
    TWEEN.update();
    renderer.render(scene, camera);
    stats.end();
    window.requestAnimationFrame(animate);
};
animate();
