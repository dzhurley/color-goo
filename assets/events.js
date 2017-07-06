import * as THREE from 'three';

import { camera, scene } from './three';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const hoverCursor = ({ clientX, clientY }) => {
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(scene.children);
    document.querySelector('canvas').style.cursor = hits.length ? 'pointer' : '';
};
window.addEventListener('mousemove', hoverCursor, false);

export const onIntersect = (target, type, callback) => {
    window.addEventListener(type, () => {
        raycaster.setFromCamera(mouse, camera);
        const hit = raycaster.intersectObject(target);
        hit.length && callback(hit[0].object);
    }, false);
};
