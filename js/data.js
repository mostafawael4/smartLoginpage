var logOut = document.querySelector('.logout');

var index = JSON.parse(localStorage.getItem("index"))
var array = JSON.parse(localStorage.getItem('accounts'));

console.log(array[index]);
document.querySelector(".we").innerHTML = "welcome"  + " " + array[index].name;


var products = [];
var database = new XMLHttpRequest();
database.open('get', 'https://forkify-api.herokuapp.com/api/search?q=pizza');

database.send();

database.addEventListener('readystatechange', function () {
  if (database.readyState == 4) {
    products = JSON.parse(database.response).recipes;
  }

  var cartona = '';
  for (var i = 0; i < products.length; i++) {
    cartona += `
            <div class="col-4 text-center text-white">
                <div>
                    <img src="${products[i].image_url}" alt="" class="w-100 design ">
                    <p>${products[i].title}</p>
                </div>
            </div>
            `;
  }

  document.querySelector('.row').innerHTML = cartona;
});


logOut.addEventListener("click",logout);

function logout() {
    window.location.replace("./index.html")
}
