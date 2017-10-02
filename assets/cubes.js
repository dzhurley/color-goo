import * as THREE from 'three';
import './forks/MarchingCubes';

import { scene } from './three';
import params from './gui';

const ballGeo = new THREE.OctahedronBufferGeometry(42, 3);
const ballMat = new THREE.MeshBasicMaterial();

const photos = new THREE.Mesh(ballGeo, ballMat);
photos.name = 'photos';

const music = new THREE.Mesh(ballGeo, ballMat);
music.name = 'music';

const code = new THREE.Mesh(ballGeo, ballMat);
code.name = 'code';

scene.add(photos, music, code);

const wires = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ wireframe: true }),
);
wires.scale.set(params.scale, params.scale, params.scale);
scene.add(wires);

const marchMaterial = new THREE.MeshNormalMaterial();
const march = new THREE.MarchingCubes(params.resolution, marchMaterial, true, true);
march.name = 'march';
march.position.set(0, 0, 0);
march.scale.set(200, 200, 200);
scene.add(march);

const strength = 1.2 / ((Math.sqrt(3) - 1) / 4 + 1);

export default {
    object: march,
    animate: time => {
        march.init(params.resolution);
        march.isolation = params.isolation;

        wires.scale.set(params.scale, params.scale, params.scale);
        const speed = time * params.speed;

        march.reset();
        for (let i = 0; i < 3; i++) {
            const ballx = Math.sin(i + 1.26 * speed * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
            const bally = Math.abs(Math.cos(i + 1.12 * speed * Math.cos(1.22 + 0.1424 * i))) * 0.57 + 0.2;
            const ballz = Math.cos(i + 1.32 * speed * 0.1 * Math.sin((0.92 + 0.53 * i))) * 0.27 + 0.5;

            const { x, y, z } = march.addBall(ballx, bally, ballz, strength, 2);
            [photos, music, code][i].position.set(x, y, z);
            [photos, music, code][i].position.multiplyScalar(200);
        }
    }
};
