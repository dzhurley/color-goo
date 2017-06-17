import * as THREE from 'three';
import TWEEN from 'tween.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 9000);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
camera.position.z = 200;

[[200, 200, 200], [-200, 200, -200], [0, 0, 200]].forEach(pos => {
    let light = new THREE.PointLight();
    light.position.set(...pos);
    scene.add(light);
});

const me = new THREE.Mesh(
    new THREE.BoxBufferGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({ color: 0xeeeeee })
);

const tweens = [];

const photos = new THREE.Mesh(
    new THREE.DodecahedronBufferGeometry(20),
    new THREE.MeshLambertMaterial({ color: 0xff0000 })
);
photos.scale.set(0.1, 0.1, 0.1);
tweens.push(new TWEEN.Tween(photos.scale).to({ x: 1, y: 1, z: 1 }, 500));
tweens.push(new TWEEN.Tween(photos.position).to({ x: 100, y: 100, z: 0 }, 500));

const music = new THREE.Mesh(
    new THREE.TetrahedronBufferGeometry(20),
    new THREE.MeshLambertMaterial({ color: 0x00ff00 })
);
music.scale.set(0.1, 0.1, 0.1);
tweens.push(new TWEEN.Tween(music.scale).to({ x: 1, y: 1, z: 1 }, 500));
tweens.push(new TWEEN.Tween(music.position).to({ x: 100, y: -100, z: 0 }, 500));

const code = new THREE.Mesh(
    new THREE.TorusKnotBufferGeometry(10, 3, 100, 16),
    new THREE.MeshLambertMaterial({ color: 0x0000ff })
);
code.scale.set(0.1, 0.1, 0.1);
tweens.push(new TWEEN.Tween(code.scale).to({ x: 1, y: 1, z: 1 }, 500));
tweens.push(new TWEEN.Tween(code.position).to({ x: -120, y: 0, z: 0 }, 500));

scene.add(...[me, photos, music, code]);

const animate = () => {
    [me, photos, music, code].forEach(shape => {
        shape.rotation.x += 0.04;
        shape.rotation.y += 0.02;
        shape.rotation.z += 0.03;
    });
    TWEEN.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};

document.body.appendChild(renderer.domElement);
animate();

setTimeout(() => tweens.forEach(t => t.start()), 1000);
