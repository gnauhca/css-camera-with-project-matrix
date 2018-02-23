import Object3D from './object3d.js';
import { glMatrix } from 'gl-matrix';

export default class Face extends Object3D {
  constructor(style={}, attr) {
    super();
    let defaultsStyle = {
      width:　0,
      height: 0,
      background: '#abcdef'
    };

    style = Object.assign(defaultsStyle, style);

    this.elem = document.createElement('div');
    this.elem.classList.add('face');
    this.elem.style.marginTop = style.height / -2 + 'px';
    this.elem.style.marginLeft = style.width / -2 + 'px';

    for (let item in style) {
      let value = style[item];

      if (typeof value === 'number') {
        value += 'px';
      }

      this.elem.style[item] = value;
    }
    
    // this.elem.style.width = config.width + 'px';
    // this.elem.style.height = config.height + 'px';

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