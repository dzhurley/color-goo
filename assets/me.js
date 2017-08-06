import * as THREE from 'three';

import { scene } from './three';

const me = new THREE.Mesh(
    new THREE.BoxBufferGeometry(50, 50, 50),
    new THREE.MeshPhongMaterial({ color: 0xeeeeee })
);

scene.add(me);
