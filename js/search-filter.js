var header = document.getElementById("search-filter");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function showAll() {
  var products = document.getElementsByClassName("card-product");
  var articles = document.getElementsByClassName("card-article");
  for (var x of products) {
    x.style.display = 'block';
  }
  for (var x of articles) {
    x.style.display = 'block';
  }
}

function showProduct() {
  var products = document.getElementsByClassName("card-product");
  var articles = document.getElementsByClassName("card-article");
  for (var x of products) {
    x.style.display = 'block';
  }
  for (var x of articles) {
    x.style.display = 'none';
  }
}

function showArticle() {
  var products = document.getElementsByClassName("card-product");
  var articles = document.getElementsByClassName("card-article");
  for (var x of products) {
    x.style.display = 'none';
  }
  for (var x of articles) {
    x.style.display = 'block';
  }
}

const resultKey = document.getElementById("result-key");
const resultCount = $("#result-count");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTag = urlParams.get('search-tag')
const numSearchItem = $('.search-item').length

console.log(numSearchItem);

if(searchTag != null){
  resultKey.textContent += searchTag;
  resultCount.text(resultCount.text().replace('0',numSearchItem));
}