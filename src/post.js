import User from "./user.js";

class Post {
  name;
  #number;
  #suscribes;
  constructor(name) {
    this.name = name;
    this.#number = 0;
    this.#suscribes = [];
  }
  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }
  get getSuscribes() {
    let message = "";
    for (let i = 0; i < this.#suscribes.length; i++) {
      message += this.#suscribes;
      if (i != this.#suscribes.length) {
        message += ", ";
      }
    }
  }
}

export { Post };
export default Post;
