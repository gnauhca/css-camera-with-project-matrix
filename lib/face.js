import Object3D from './object3d.js';
import { glMatrix } from 'gl-matrix';

export default class Face extends Object3D {
  constructor(config={ width: 0, height: 0 }) {
    // const defaults = {
    //   width:　0,
    //   height: 0
    // }
    this.elem = document.createElement('div');
    this.elem.style.width = config.width + 'px';
    this.elem.style.height = config.height + 'px';

  }

  getWorldModalMatrix() {
    let parent = this.parent;
    let wMatrix = this.getModelMatrix();

    while(parent) {
      glMatrix.mat4.multiply(wMatrix, parent.getModalMatrix(), wMatrix);
      parent = parent.parent;
    }

    return wMatrix;
  }

}