import * as THREE from 'three';

import { scene } from './three';
import { bounceOnHover } from './events';

const code = new THREE.Mesh(
    new THREE.TorusKnotBufferGeometry(10, 3, 100, 16),
    new THREE.MeshPhongMaterial({ color: 0x0000ff })
);
code.scale.set(0.1, 0.1, 0.1);
code.userData = { endPosition: { x: -120, y: 0, z: 0 } };

bounceOnHover(code);

scene.add(code);

export default {
    object: code,
    animate() {
        code.rotation.x += 0.002;
        code.rotation.y += 0.001;
        code.rotation.z += 0.003;
    }
};
