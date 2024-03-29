import * as glMatrix from 'gl-matrix';


export default function render(scene, camera) {

  let cameraMatrix = glMatrix.mat4.create();
  let projectViewMatrix = glMatrix.mat4.create();
  let scaleMatrix = glMatrix.mat4.create();

  glMatrix.mat4.multiply(projectViewMatrix, camera.getProjectiveMatrix(), camera.getViewMatrix());


  glMatrix.mat4.fromScaling(scaleMatrix, [scene.width, scene.height,  scene.height]);
  glMatrix.mat4.multiply(cameraMatrix, scaleMatrix, projectViewMatrix);

  // cameraMatrix = camera.getViewMatrix()
  
  // glMatrix.mat4.fromScaling(scaleMatrix, [1, 1, 1]);
  // glMatrix.mat4.multiply(cameraMatrix, scaleMatrix, camera.getProjectiveMatrix());

  scene.faces.forEach(face => {
    let faceMatrix = glMatrix.mat4.create();

    glMatrix.mat4.multiply(faceMatrix, cameraMatrix, face.getWorldModalMatrix());

    let faceWorldPosition = glMatrix.vec3.transformMat4(glMatrix.vec3.create(), [50, 50, -100], faceMatrix);

    faceWorldPosition = faceWorldPosition.map(num => num.toFixed(6));
    faceMatrix = faceMatrix.map(num => num.toFixed(6));
    face.elem.style.transform = `translate(-50%, -50%) matrix3d(${faceMatrix.join(',')})`;
    // face.elem.style.transformOrigin = '0px 0px';

    // console.log(faceMatrix);
  });
}