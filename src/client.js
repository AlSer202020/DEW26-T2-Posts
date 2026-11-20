import User from "./user.js";
import PaidPost from "./paid-post.js";

class Client extends User {
  constructor(name) {
    super(name);
    this.billing = 0;
  }
  notify(publicacion) {
    if (publicacion instanceof PaidPost) {
      this.billing = Math.round((this.billing + publicacion.price) * 100) / 100;
    }
    return super.notify(publicacion);
  }
}

export { Client };
export default Client;
