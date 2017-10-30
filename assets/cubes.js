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
marchMaterial.extensions.derivatives = true;

const march = new THREE.MarchingCubes(params.resolution, marchMaterial, true, true);
march.name = 'march';
march.isolation = 60;
march.position.set(0, 0, 0);
march.scale.set(200, 200, 200);
scene.add(march);

const strength = 1.2 / ((Math.sqrt(3) - 1) / 4 + 1);
const ballPos = [
    { x: 0, y: 0, z: 0, speed: 0 },
    { x: 0, y: 0, z: 0, speed: 0 },
    { x: 0, y: 0, z: 0, speed: 0 },
];

const updatePosition = (ball, index, time) => {
    if (!ball.userData.clicked) {
        ballPos[index].speed += time * params.speed;

        ballPos[index].x = Math.sin(index + ballPos[index].speed * Math.cos(1 + index)) * params.bounds + 0.5;
        ballPos[index].y = Math.cos(index + ballPos[index].speed * Math.sin(1 + index)) * params.bounds + 0.5;
        ballPos[index].z = Math.cos(index + ballPos[index].speed * Math.cos(1 + index)) * params.bounds + 0.5;
    }

    const { x, y, z } = march.addBall(ballPos[index].x, ballPos[index].y, ballPos[index].z, strength, 2);
    ball.position.set(x, y, z);
    ball.position.multiplyScalar(200);
};

export default {
    object: march,
    animate: time => {
        center.rotateX(0.0005);
        center.rotateY(0.0006);
        center.rotateZ(0.0007);

        march.init(params.resolution);
        march.reset();

        updatePosition(photos, 0, time);
        updatePosition(music, 1, time);
        updatePosition(code, 2, time);
    }
};
