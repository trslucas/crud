module.exports = {
  posts: [
    {
      id: "dasdsadsa",
      title: "Olá",
      description:
        "Me chamo Lucas Trindade, sou desenvolvedor fullstack em formação e este é o meu primeiro CRUD! Ele foi feito em Node.JS.",
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: this.generetaID(), title, description });
  },

  generetaID() {
    return (id = Math.random().toString(36).substring(2));
  },

  deletePost(id) {
    this.posts = this.posts.filter((item) => item.id != id);
  },
};
