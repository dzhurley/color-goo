import * as THREE from 'three';

export const me = new THREE.Mesh(
    new THREE.BoxBufferGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({ color: 0xeeeeee })
);
me.userData = { endPosition: { x: 0, y: 0, z: 0 } };

export const photos = new THREE.Mesh(
    new THREE.DodecahedronBufferGeometry(20),
    new THREE.MeshLambertMaterial({ color: 0xff0000 })
);
photos.scale.set(0.1, 0.1, 0.1);
photos.userData = { endPosition: { x: 100, y: 100, z: 0 } };

export const music = new THREE.Mesh(
    new THREE.TetrahedronBufferGeometry(20),
    new THREE.MeshLambertMaterial({ color: 0x00ff00 })
);
music.scale.set(0.1, 0.1, 0.1);
music.userData = { endPosition: { x: 100, y: -100, z: 0 } };

export const code = new THREE.Mesh(
    new THREE.TorusKnotBufferGeometry(10, 3, 100, 16),
    new THREE.MeshLambertMaterial({ color: 0x0000ff })
);
code.scale.set(0.1, 0.1, 0.1);
code.userData = { endPosition: { x: -120, y: 0, z: 0 } };
