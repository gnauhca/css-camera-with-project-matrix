import Object3D from './object3d.js';

export default class Group extends Object3D {
  constructor() {
    super();
    this.children = [];
  }

  add(obj) {
    this.children.push(obj);
    obj.parent = this;
  }
}