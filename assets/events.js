import * as THREE from 'three';
import TWEEN from 'tween.js';

import { camera, scene } from './three';

export const raycaster = new THREE.Raycaster();
export const mouse = new THREE.Vector2();

const bounce = (obj, hovering) => {
    const newScale = hovering ? 1 : 1.1;
    return new TWEEN.Tween(obj.scale)
        .to({ x: newScale, y: newScale, z: newScale }, 750)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();
};

export const bounceOnHover = obj => {
    let hovering = false;
    window.addEventListener('mousemove', () => {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObject(obj);
        if (!hovering && hits.length) {
            bounce(obj, hovering);
            hovering = true;
        } else if (hovering && !hits.length) {
            bounce(obj, hovering);
            hovering = false;
        }
    }, false);
};

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
