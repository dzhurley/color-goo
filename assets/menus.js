import { camera } from './three';

const containers = {
    photos: document.querySelector('.photos'),
    music: document.querySelector('.music'),
    code: document.querySelector('.code'),
};

export const toggleMenu = (object, state) => {
    return state ?
        containers[object.name].classList.add('open') :
        containers[object.name].classList.remove('open');
};

export const trackMenu = object => {
    const vector = object.position.clone().project(camera);
    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;
    containers[object.name].style.top = `${-(vector.y * heightHalf) + heightHalf}px`;
    containers[object.name].style.left = `${(vector.x * widthHalf) + widthHalf}px`;
};
