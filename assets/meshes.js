import * as THREE from 'three';

import { scene } from './three';
import { trackMenu } from './menus';

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
    new THREE.TetrahedronBufferGeometry(8, 0),
    new THREE.MeshBasicMaterial({ shading: THREE.FlatShading }),
);
centerMesh.name = 'center';

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

scene.add(backgroundMesh, centerMesh);

export default {
    animate: () => {
        centerMesh.rotation.x += 0.05;
        centerMesh.rotation.y += 0.04;
        centerMesh.rotation.z += 0.06;

        trackMenu(photos);
        trackMenu(music);
        trackMenu(code);
    }
};
