const containers = {
    photos: document.querySelector('.photos-menu'),
    music: document.querySelector('.music-menu'),
    code: document.querySelector('.code-menu'),
};

export const toggleMenu = (object, mouse, state) => {
    if (state) {
        containers[object.name].innerHTML = `now showing ${object.name}`;
        containers[object.name].style.display = 'block';
        containers[object.name].style.top = `${-window.innerHeight * ((mouse.y - 1) / 2)}px`;
        containers[object.name].style.left = `${window.innerWidth * ((mouse.x + 1) / 2)}px`;
    } else {
        containers[object.name].style.display = 'none';
    }
};
