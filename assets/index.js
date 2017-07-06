import TWEEN from 'tween.js';

import { camera, renderer, scene } from './three';

import { onIntersect } from './events';

import me from './me';
import photos from './photos';
import music from './music';
import code from './code';

onIntersect(me.object, 'click', () => [photos, music, code].forEach(({ object }) => {
    new TWEEN.Tween(object.scale).to({ x: 1, y: 1, z: 1 }, 500).start();
    new TWEEN.Tween(object.position).to(object.userData.endPosition, 500).start();
}));

const animate = () => {
    me.animate();
    photos.animate();
    music.animate();
    code.animate();

    TWEEN.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};
animate();
