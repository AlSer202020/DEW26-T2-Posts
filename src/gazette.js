import Post from "./post.js";

class Gazette extends Post {
  constructor(name) {
    super(name);
  }
  get summary() {
    return super.summary;
  }
}

export default Gazette;
