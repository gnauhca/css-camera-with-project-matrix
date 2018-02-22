import * as glMatrix from 'gl-matrix';

// console.log(glMatrix.mat4.create());

export default class Object3D {
  constructor() {
    this.position;
    this.rotation;
    this.scale;
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

    this.matrix = matrix;
    this.matrixNeedUpdate = false;
    return matrix;
  }

  
}