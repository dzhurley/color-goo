import * as THREE from 'three';

import { scene } from './three';

const music = new THREE.Mesh(
    new THREE.TetrahedronBufferGeometry(20),
    new THREE.MeshLambertMaterial({ color: 0x00ff00 })
);
music.scale.set(0.1, 0.1, 0.1);
music.userData = { endPosition: { x: 100, y: -100, z: 0 } };

scene.add(music);

export default {
    object: music,
    animate() {
        music.rotation.x += 0.03;
        music.rotation.y += 0.04;
        music.rotation.z += 0.02;
    }
};
