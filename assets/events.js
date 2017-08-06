import * as THREE from 'three';

import { camera, scene } from './three';

export const raycaster = new THREE.Raycaster();
export const mouse = new THREE.Vector2();

const hoverCursor = ({ clientX, clientY }) => {
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(scene.children);
    document.querySelector('canvas').style.cursor = hits.length ? 'pointer' : '';
};
window.addEventListener('mousemove', hoverCursor, false);
