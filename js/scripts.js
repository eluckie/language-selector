function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("none").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();

  }
}

// animals 5 && family 5 || mermaids - none
// animals 1-2 && family 1-2 || centaurs - java
// animals 3 || family 3 || yeti - python
// animals 4 || family 4 || nessie - c#
// (else) - ruby