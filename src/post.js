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
  getSubscribers() {
    let message = "";
    for (let i = 0; i < this.#suscribes.length; i++) {
      message += this.#suscribes[i].name;
      if (i < this.#suscribes.length - 1) {
        message += ",";
      }
    }
    return message;
  }

  attach(user) {
    if (user instanceof User && !this.#suscribes.includes(user)) {
      this.#suscribes.push(user);
    }
  }
  detach(user) {
    const index = this.#suscribes.indexOf(user);
    if (index !== -1) {
      this.#suscribes.splice(index, 1);
    }
  }
  publish() {
    this.#number++;
    return this.#suscribes.map((suscritor) => suscritor.notify(this));
  }
}

export { Post };
export default Post;
