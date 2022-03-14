//chamando a update quando todos os elementos do página forem carregados
document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://localhost:5000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = " ";
      let posts = JSON.parse(json);

      posts.forEach((post) => {
        let postElement = `<div id="${post.id}" class="card mb-4">
        <div class="card-header">
            <h5 class="card-header-title">${post.title}
            </h5>
        </div>
        <div class="card-body">
            <div class="card-text d-flex justify-content-between align-items-center">${post.description}<div class="btn btn-danger" id="${post.id}" onclick="deletePost(this)">Deletar</div></div>
            
        </div>
    </div>`;
        postElements += postElement;
      });
      document.getElementById("posts").innerHTML = postElements;
    });
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let post = { title, description };
  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("http://localhost:5000/api/new", options).then((res) => {
    console.log(res);
    updatePosts();
    document.getElementById("title").value = " ";
    document.getElementById("description").value = " ";
  });
}

function deletePost(event) {
  console.log(event.id);

  let id = { id: event.id };
  console.log(id);
  const options = {
    method: "DELETE",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(id),
  };

  fetch("http://localhost:5000/api/deleta", options).then((res) => {
    updatePosts();
  });
}
