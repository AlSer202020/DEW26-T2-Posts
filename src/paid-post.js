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
}

export default PaidPost;
