import * as glMatrix from 'gl-matrix';

// console.log(glMatrix.mat4.create());

export default class Object3D {
  constructor() {
    this.position = [0, 0, 0];
    this.rotation = [0, Math.PI / 4, 0];
    this.scale = [1, 1, 1];
    this.matrixNeedUpdate = false;
    this.matrix = glMatrix.mat4.create();
  }

  setPosition(vec3) {
    this.position = vec3;
    this.matrixNeedUpdate = true;
  }

  setRotation(vec3) {
    this.rotation = vec3;
    this.matrixNeedUpdate = true;
  }

  setScale(vec3) {
    this.scale = vec3;
    this.matrixNeedUpdate = true;
  }

  getModelMatrix() {
    if (!this.matrixNeedUpdate) {
      return this.matrix;
    }

    let matrix = glMatrix.mat4.create();

    glMatrix.mat4.fromScaling(matrix, this.scale);

    glMatrix.mat4.fromXRotation(matrix, this.rotation[0]);
    glMatrix.mat4.fromYRotation(matrix, this.rotation[1]);
    glMatrix.mat4.fromZRotation(matrix, this.rotation[2]);

    glMatrix.mat4.fromTranslation(matrix, this.position);

    // let a = glMatrix.mat4.create();
    // let b = glMatrix.mat4.create();
    // glMatrix.mat4.fromTranslation(a, this.position);
    // glMatrix.mat4.fromRotation(b, 1, [0.5, 0.5, 0]);
    // glMatrix.mat4.multiply(matrix, a, b);

    this.matrix = matrix;
    this.matrixNeedUpdate = false;
    return matrix;
  }

  
}