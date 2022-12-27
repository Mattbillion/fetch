
fetch("http://localhost:3333/api/cars")
.then(res=>res.json())
.then(data=>console.log(data));

let allButton = document.getElementById("all-cars");

allButton.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
  .then(res=>res.json())
  .then(data=>console.log(data));

  let createDiv = document.createElement("div");
  createDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${model}">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
})




