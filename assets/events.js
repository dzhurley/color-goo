import * as THREE from 'three';
import TWEEN from 'tween.js';

import { camera, scene } from './three';
import params from './gui';

export const raycaster = new THREE.Raycaster();
export const mouse = new THREE.Vector2();

const hoverCursor = ({ clientX, clientY }) => {
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(scene.children);
    document.querySelector('canvas').style.cursor = hits.length ? 'pointer' : '';
    // eslint-disable-next-line
    hits[0] && console.log(`hit: ${hits[0].object.name}`);
};
window.addEventListener('mousemove', hoverCursor, false);

let exploded = false;
const push = new TWEEN.Tween(params).easing(TWEEN.Easing.Sinusoidal.InOut).onComplete(() => exploded = true);
const pull = new TWEEN.Tween(params).easing(TWEEN.Easing.Sinusoidal.InOut).onComplete(() => exploded = false);
const explode = () => {
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(scene.children);
    if (hits.length) {
        (exploded && hits[0].object.name === 'center') ?
            pull.to({ bounds: 0.05 }, params.duration).start() :
            push.to({ bounds: 0.25 }, params.duration).start();
    }
};
window.addEventListener('click', explode, false);
