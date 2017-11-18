import { camera } from './three';

const containers = {
    photos: document.querySelector('.photos-menu'),
    music: document.querySelector('.music-menu'),
    code: document.querySelector('.code-menu'),
};

const widthHalf = window.innerWidth / 2;
const heightHalf = window.innerHeight / 2;

export const toggleMenu = (object, state) => {
    containers[object.name].style.display = state ? 'block' : 'none';
};

export const trackMenu = object => {
    const vector = object.position.clone().project(camera);
    containers[object.name].style.top = `${-(vector.y * heightHalf) + heightHalf}px`;
    containers[object.name].style.left = `${(vector.x * widthHalf) + widthHalf}px`;
};
