import * as THREE from 'three';
import './forks/MarchingCubes';

import { points, scene } from './three';
import params from './gui';

import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';

const ballGeo = new THREE.OctahedronBufferGeometry(42, 3);
const ballMat = new THREE.MeshBasicMaterial();

const photos = new THREE.Mesh(ballGeo, ballMat);
photos.name = 'photos';

const music = new THREE.Mesh(ballGeo, ballMat);
music.name = 'music';

const code = new THREE.Mesh(ballGeo, ballMat);
code.name = 'code';

scene.add(photos, music, code);

const center = new THREE.Mesh(
    new THREE.OctahedronBufferGeometry(20, 0),
    new THREE.MeshPhongMaterial({ shading: THREE.FlatShading }),
);
center.name = 'center';
scene.add(center);

const uniforms = {
    uLightPosition0: { value: points[0].position },
    uLightPosition1: { value: points[1].position },
    uLightPosition2: { value: points[2].position },
    uPhotosPosition: { value: photos.position },
    uMusicPosition: { value: music.position },
    uCodePosition: { value: code.position },
};
const marchMaterial = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
const march = new THREE.MarchingCubes(40, marchMaterial, true, true);
march.name = 'march';
march.position.set(0, 0, 0);
march.scale.set(200, 200, 200);
scene.add(march);

const strength = 1.2 / ((Math.sqrt(3) - 1) / 4 + 1);
let ballx, bally, ballz;

export default {
    object: march,
    animate: time => {
        center.rotateX(0.0005);
        center.rotateY(0.0006);
        center.rotateZ(0.0007);

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
