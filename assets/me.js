import * as THREE from 'three';

import { scene } from './three';

const me = new THREE.Mesh(
    new THREE.BoxBufferGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({ color: 0xeeeeee })
);
me.userData = { endPosition: { x: 0, y: 0, z: 0 } };

scene.add(me);

export default {
    object: me,
    animate() {
        me.rotation.x += 0.03;
        me.rotation.y += 0.04;
        me.rotation.z += 0.02;
    }
};
