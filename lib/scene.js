import Group from './group.js';

export default class Scene {
  constructor(container) {
    this.container = container;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.faces = [];
  }

  add(obj) {

    let add = (o) => {
      if (o instanceof Group) {
        o.children.forEach(oc => add(oc));
      } else {
        this.container.appendChild(o.elem);
        this.faces.push(o);
      }
    }

    add(obj);
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
  }
}