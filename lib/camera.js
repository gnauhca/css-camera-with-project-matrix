import * as glMatrix from 'gl-matrix';

export default class Camera {
  constructor(fov, aspect, near=0, far=100000) {
    this.projectiveMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(this.projectiveMatrix, fov, aspect, near, far);

    this.position = [0, 0, 0];
    this.lookAt = [0, 0, -1];
    this.up = [0, 1, 0];
    this.viewMatrixNeedUpdate = true;
    this.viewMatrix;
  }

  setPosition(vec3) {
    this.position = vec3;
    this.viewMatrixNeedUpdate = true;
  }

  setLookAt(vec3) {
    this.lookAt = glMatrix.vec3.create();

    glMatrix.vec3.normalize(this.lookAt, vec3);
    this.viewMatrixNeedUpdate = true;
  }

  setUp(vec3) {
    this.up = vec3;
    this.viewMatrixNeedUpdate = true;
  }

  getProjectiveMatrix() {
    return this.projectiveMatrix;
  }

  getViewMatrix() {

    if (!this.viewMatrixNeedUpdate) {
      return this.viewMatrix;
    } 

    let viewMatrix = glMatrix.mat4.create();

    glMatrix.mat4.lookAt(viewMatrix, this.position, this.lookAt, this.up());
    this.viewMatrix = viewMatrix;
    this.viewMatrixNeedUpdate = false;
    return viewMatrix;
  }
  

}