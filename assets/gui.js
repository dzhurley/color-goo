import dat from 'dat.gui/build/dat.gui';

const params = {
    bounds: 0.05,
    duration: 2500,
    resolution: 30,
    speed: 1,
};

const gui = new dat.GUI();
gui.add(params, 'duration', 500, 5000, 100);
gui.add(params, 'resolution', 26, 44, 2);
gui.add(params, 'speed', 0, 10, 0.1);

export default params;
