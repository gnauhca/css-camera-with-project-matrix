require('./index.scss');

import * as CSS3D from './lib/main.js';


let containerElem = document.querySelector('.container');
let containerWidth = containerElem.offsetWidth;
let containerHeight = containerElem.offsetHeight;
let aspect = containerWidth / containerHeight;

let camera = new CSS3D.Camera(Math.PI / 2, aspect);
let scene = new CSS3D.Scene(containerElem);
let face = new CSS3D.Face({
  width: 100,
  height: 100
});

camera.setPosition([100, 100, 200]);
camera.setLookAt([0, 0, -200]);
face.setPosition([0, 0, -200]);
face.setPosition([0, 0, -200]);
// face.setScale([0.5, 1, 1]);
// face.setRotation([Math.PI / 4, 0, 0]);

scene.add(face);

CSS3D.render(scene, camera);
