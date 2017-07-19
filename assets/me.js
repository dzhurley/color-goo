import * as THREE from 'three';

import { scene } from './three';
import { bounceOnHover } from './events';

const me = new THREE.Mesh(
    new THREE.BoxBufferGeometry(50, 50, 50),
    new THREE.MeshPhongMaterial({ color: 0xeeeeee })
);
me.userData = { endPosition: { x: 0, y: 0, z: 0 } };

bounceOnHover(me);

scene.add(me);

export default {
    object: me,
    animate() {
        me.rotation.x += 0.002;
        me.rotation.y += 0.003;
        me.rotation.z += 0.001;
    }
};
