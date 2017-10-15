import dat from 'dat.gui/build/dat.gui';

const params = {
    bounds: 0.05,
    isolation: 80,
    resolution: 40,
    speed: 4,
    scale: 360,
};

const gui = new dat.GUI();
gui.add(params, 'bounds', 0.05, 0.25, 0.01);
gui.add(params, 'isolation', 10, 100, 1);
gui.add(params, 'resolution', 14, 50, 2);
gui.add(params, 'speed', 0, 10, 0.1);
gui.add(params, 'scale', 100, 400);

export default params;
