import * as THREE from 'three';
import './forks/MarchingCubes';

import { points, scene } from './three';
import params from './gui';
import { photos, music, code } from './meshes';

import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';

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

const march = new THREE.MarchingCubes(34, marchMaterial, true, true);
march.name = 'march';
march.isolation = 60;
march.position.set(0, 0, 0);
march.scale.set(200, 200, 200);
scene.add(march);

const strength = 1.2 / ((Math.sqrt(3) - 1) / 4 + 1);
let newPosition = {};

const updatePosition = (ball, index, time) => {
    if (!ball.userData.clicked) {
        ball.userData.speed += time * params.speed;
        ball.userData.x = Math.sin(index + ball.userData.speed * Math.cos(1 + index)) * params.bounds + 0.5;
        ball.userData.y = Math.cos(index + ball.userData.speed * Math.sin(1 + index)) * params.bounds + 0.5;
        ball.userData.z = Math.cos(index + ball.userData.speed * Math.cos(1 + index)) * params.bounds + 0.5;
    }

    newPosition = march.addBall(ball.userData.x, ball.userData.y, ball.userData.z, strength, 2);
    ball.position.set(newPosition.x, newPosition.y, newPosition.z);
    ball.position.multiplyScalar(200);
};

export default {
    object: march,
    animate: time => {
        march.reset();
        updatePosition(photos, 0, time);
        updatePosition(music, 1, time);
        updatePosition(code, 2, time);
    }
};
