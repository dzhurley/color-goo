import * as THREE from 'three';

import { scene } from './three';
import { bounceOnHover } from './events';

const photos = new THREE.Mesh(
    new THREE.DodecahedronBufferGeometry(20),
    new THREE.MeshPhongMaterial({ color: 0xff0000 })
);
photos.scale.set(0.1, 0.1, 0.1);
photos.userData = { endPosition: { x: 100, y: 100, z: 0 } };

bounceOnHover(photos);

scene.add(photos);

export default {
    object: photos,
    animate() {
        photos.rotation.x += 0.003;
        photos.rotation.y += 0.002;
        photos.rotation.z += 0.001;
    }
};
