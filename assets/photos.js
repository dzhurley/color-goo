import * as THREE from 'three';

import { scene } from './three';

const photos = new THREE.Mesh(
    new THREE.DodecahedronBufferGeometry(20),
    new THREE.MeshLambertMaterial({ color: 0xff0000 })
);
photos.scale.set(0.1, 0.1, 0.1);
photos.userData = { endPosition: { x: 100, y: 100, z: 0 } };

scene.add(photos);

export default {
    object: photos,
    animate() {
        photos.rotation.x += 0.02;
        photos.rotation.y += 0.04;
        photos.rotation.z += 0.03;
    }
};
