import Client from "./client.js";
import Post from "./post.js";

class PaidPost extends Post {
  price;

  constructor(name, price) {
    super(name);
    this.price = price;
  }
  get summary() {
    return super.summary;
  }
  attach(user) {
    if (user instanceof Client) {
      super.attach(user);
    }
  }
}

export default PaidPost;
