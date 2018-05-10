const fetch = require("node-fetch");
const co = require("co");

// Mit fetch()
fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(post => post.title)
  .then(x => console.log("title:", x));

// Mit Generator Funktion -> *()
co(function*() {
  const url = "http://jsonplaceholder.typicode.com/posts/1";
  const response = yield fetch(url)
  const post = yield response.json();
  console.log("Title:", post.title);
})