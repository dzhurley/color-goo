import * as THREE from 'three';

import { scene } from './three';

const ballGeo = new THREE.OctahedronBufferGeometry(42, 3);
const ballMat = new THREE.MeshBasicMaterial();

export const cyan = new THREE.Mesh(ballGeo, ballMat);
cyan.name = 'cyan';
cyan.userData = { x: 0, y: 0, z: 0, speed: 0 };

export const magenta = new THREE.Mesh(ballGeo, ballMat);
magenta.name = 'magenta';
magenta.userData = { x: 0, y: 0, z: 0, speed: 0 };

export const yellow = new THREE.Mesh(ballGeo, ballMat);
yellow.name = 'yellow';
yellow.userData = { x: 0, y: 0, z: 0, speed: 0 };

const backgroundMesh = new THREE.Mesh(
    new THREE.IcosahedronBufferGeometry(3000, 3),
    new THREE.MeshPhongMaterial({
        color: 0x000000,
        specular: 0x020202,
        shininess: 90,
        shading: THREE.FlatShading,
        side: THREE.BackSide,
    }),
);
backgroundMesh.name = 'background';

scene.add(backgroundMesh, cyan, magenta, yellow);

