import * as THREE from 'three';

import { scene } from './three';

const code = new THREE.Mesh(
    new THREE.TorusKnotBufferGeometry(10, 3, 100, 16),
    new THREE.MeshLambertMaterial({ color: 0x0000ff })
);
code.scale.set(0.1, 0.1, 0.1);
code.userData = { endPosition: { x: -120, y: 0, z: 0 } };

scene.add(code);

export default {
    object: code,
    animate() {
        code.rotation.x += 0.04;
        code.rotation.y += 0.02;
        code.rotation.z += 0.03;
    }
};
