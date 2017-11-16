import * as THREE from 'three';
import TWEEN from 'tween.js';

import { camera, scene } from './three';
import params from './gui';

export const raycaster = new THREE.Raycaster();
export const mouse = new THREE.Vector2();

let intersections = [];

const hoverCursor = ({ clientX, clientY }) => {
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    intersections = raycaster.intersectObjects(scene.children);
    if (intersections[0].object.name !== 'background') return;
    document.querySelector('canvas').style.cursor = intersections.length ? 'pointer' : '';
};
window.addEventListener('mousemove', hoverCursor, false);


let exploded = false;
const push = new TWEEN.Tween(params)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .onComplete(() => exploded = true);
const pull = new TWEEN.Tween(params)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .onComplete(() => exploded = false);

const onClick = () => {
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(scene.children);
    if (!hits.length) return;

    if (!exploded && hits[0].object.name !== 'background') {
        push.to({ bounds: 0.25 }, params.duration).start();
    } else if (hits[0].object.name === 'center') {
        pull.to({ bounds: 0.05 }, params.duration).start();
    } else {
        hits[0].object.userData.clicked = !hits[0].object.userData.clicked;
    }
};
window.addEventListener('click', onClick, false);
