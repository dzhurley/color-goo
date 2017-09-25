import * as THREE from 'three';
import './forks/MarchingCubes';

import { scene } from './three';

const ballGeo = new THREE.OctahedronBufferGeometry(42, 3);
const ballMat = new THREE.MeshBasicMaterial();

const photos = new THREE.Mesh(ballGeo, ballMat);
photos.name = 'photos';

const music = new THREE.Mesh(ballGeo, ballMat);
music.name = 'music';

const code = new THREE.Mesh(ballGeo, ballMat);
code.name = 'code';

scene.add(photos, music, code);

const marchMaterial = new THREE.MeshNormalMaterial();
const march = new THREE.MarchingCubes(42, marchMaterial, true, true);
march.name = 'march';
march.position.set(0, 0, 0);
march.scale.set(200, 200, 200);
scene.add(march);

export default {
    object: march,
    animate: time => {
        march.reset();
        const strength = 1.2 / ((Math.sqrt(3) - 1) / 4 + 1);
        for (let i = 0; i < 3; i++) {
            const ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
            const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.57 + 0.2;
            const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin((0.92 + 0.53 * i))) * 0.27 + 0.5;

            const { x, y, z } = march.addBall(ballx, bally, ballz, strength, 2);
            [photos, music, code][i].position.set(x, y, z);
            [photos, music, code][i].position.multiplyScalar(200);
        }
    }
};
