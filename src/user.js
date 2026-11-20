class User {
  constructor(name) {
    this.name = name;
  }
  read(text) {
    return `${this.name} is reading ${text}`;
  }
  notify(publicacion) {
    return this.read(publicacion.summary);
  }
}

export { User };
export default User;
