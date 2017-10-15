import * as THREE from 'three';
import './forks/MarchingCubes';

import { scene } from './three';
import params from './gui';

const ballGeo = new THREE.OctahedronBufferGeometry(42, 3);

const photos = new THREE.Mesh(
    ballGeo,
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
photos.name = 'photos';

const music = new THREE.Mesh(
    ballGeo,
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);
music.name = 'music';

const code = new THREE.Mesh(
    ballGeo,
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
);
code.name = 'code';

scene.add(photos, music, code);

const marchMaterial = new THREE.MeshNormalMaterial();
const march = new THREE.MarchingCubes(params.resolution, marchMaterial, true, true);
march.name = 'march';
march.position.set(0, 0, 0);
march.scale.set(200, 200, 200);
scene.add(march);

const strength = 1.2 / ((Math.sqrt(3) - 1) / 4 + 1);
let ballx, bally, ballz;

export default {
    object: march,
    animate: time => {
        march.init(params.resolution);
        march.isolation = params.isolation;

        const speed = time * params.speed;

        march.reset();
        for (let i = 0; i < 3; i++) {
            ballx = Math.sin(i + speed * Math.cos(1 + i)) * params.bounds + 0.5;
            bally = Math.cos(i + speed * Math.sin(1 + i)) * params.bounds + 0.5;
            ballz = Math.cos(i + speed * Math.cos(1 + i)) * params.bounds + 0.5;

            const { x, y, z } = march.addBall(ballx, bally, ballz, strength, 2);
            [photos, music, code][i].position.set(x, y, z);
            [photos, music, code][i].position.multiplyScalar(200);
        }
    }
};
