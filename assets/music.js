import * as THREE from 'three';

import { scene } from './three';
import { bounceOnHover } from './events';

const music = new THREE.Mesh(
    new THREE.TetrahedronBufferGeometry(20),
    new THREE.MeshPhongMaterial({ color: 0x00ff00 })
);
music.scale.set(0.1, 0.1, 0.1);
music.userData = { endPosition: { x: 100, y: -100, z: 0 } };

bounceOnHover(music);

scene.add(music);

export default {
    object: music,
    animate() {
        music.rotation.x += 0.001;
        music.rotation.y += 0.002;
        music.rotation.z += 0.003;
    }
};
