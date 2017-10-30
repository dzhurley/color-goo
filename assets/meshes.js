import * as THREE from 'three';

import { scene } from './three';

const ballGeo = new THREE.OctahedronBufferGeometry(42, 3);
const ballMat = new THREE.MeshBasicMaterial();

export const photos = new THREE.Mesh(ballGeo, ballMat);
photos.name = 'photos';
photos.userData = { x: 0, y: 0, z: 0, speed: 0 };

export const music = new THREE.Mesh(ballGeo, ballMat);
music.name = 'music';
music.userData = { x: 0, y: 0, z: 0, speed: 0 };

export const code = new THREE.Mesh(ballGeo, ballMat);
code.name = 'code';
code.userData = { x: 0, y: 0, z: 0, speed: 0 };

scene.add(photos, music, code);

const centerMesh = new THREE.Mesh(
    new THREE.OctahedronBufferGeometry(20, 0),
    new THREE.MeshPhongMaterial({ shading: THREE.FlatShading }),
);
centerMesh.name = 'center';

scene.add(centerMesh);

export const center = {
    animate: () => {
        centerMesh.rotateX(0.005);
        centerMesh.rotateY(0.006);
        centerMesh.rotateZ(0.007);
    }
};
