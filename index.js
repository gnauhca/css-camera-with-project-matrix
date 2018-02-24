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
let face2 = new CSS3D.Face({
  width: 100,
  height: 100
});
face2.elem.style.background = 'red';

camera.setPosition([0, 100, 200]);
camera.setLookAt([0, 0, 0]);
face.setPosition([0, 0, 0]);
face.setPosition([0, 0, 0]);

// face.setScale([0.5, 1, 1]);
face.setRotation([Math.PI / -2, 0, 0]);
// face2.setRotation([Math.PI / -2, 0, 0]);
scene.add(face);
scene.add(face2);


let cameraRadian = 0;
function tick(){
  cameraRadian += 0.006;

  camera.setPosition([Math.cos(cameraRadian) * 300, 200, Math.sin(cameraRadian) * 300]);
  CSS3D.render(scene, camera);
  window.requestAnimationFrame(tick);
}
// tick();

CSS3D.render(scene, camera);
