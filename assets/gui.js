import dat from 'dat.gui/build/dat.gui';

const params = {
    bounds: 0.05,
    speed: 1,
};

const gui = new dat.GUI();
gui.add(params, 'speed', 0, 10, 0.1);

export default params;
