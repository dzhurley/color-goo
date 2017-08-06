import * as THREE from 'three';
import 'three-examples/MarchingCubes';

import { scene } from './three';

const photos = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 200),
    new THREE.MeshPhongMaterial({ color: 0xFF0000 })
);
photos.name = 'photos';

const music = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 200),
    new THREE.MeshPhongMaterial({ color: 0x00FF00 })
);
music.name = 'music';

const code = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 200),
    new THREE.MeshPhongMaterial({ color: 0x0000FF })
);
code.name = 'code';

scene.add(photos, music, code);

const marchMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0xFFFFFF, shininess: 1 });
const march = new THREE.MarchingCubes(28, marchMaterial, true, true);
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
            const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77;
            const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin((0.92 + 0.53 * i))) * 0.27 + 0.5;

            march.addBall(ballx, bally, ballz, strength, 12);
            [photos, music, code][i].position.set(
                ballx * 200,
                bally * 200,
                ballz * 200,
            );
        }
    }
};
