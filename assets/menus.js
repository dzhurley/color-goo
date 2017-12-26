import { camera } from './three';

const containers = {
    photos: document.querySelector('.photos-menu'),
    music: document.querySelector('.music-menu'),
    code: document.querySelector('.code-menu'),
};

export const toggleMenu = (object, state) => {
    return state ?
        containers[object.name].classList.add('open') :
        containers[object.name].classList.remove('open');
};

export const trackMenu = object => {
    const vector = object.position.clone().project(camera);
    const heightHalf = window.innerHeight / 2;
    containers[object.name].style.top = `${-(vector.y * heightHalf) + heightHalf}px`;
};
