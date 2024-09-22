// send selected pet (dog or cat) to match.js
dogButton.addEventListener("click", function () {
  window.location.href = `match.html?value=${dogButton.value}`;
});
catButton.addEventListener("click", function () {
  window.location.href = `match.html?value=${catButton.value}`;
});
