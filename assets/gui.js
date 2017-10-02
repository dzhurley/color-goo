import dat from 'dat.gui/build/dat.gui';

const params = {
    isolation: 80,
    resolution: 42,
    speed: 1,
    scale: 360,
};

const gui = new dat.GUI();
gui.add(params, 'isolation', 10, 100, 1);
gui.add(params, 'resolution', 14, 50, 2);
gui.add(params, 'speed', 0, 10, 0.1);
gui.add(params, 'scale', 100, 400);

export default params;
