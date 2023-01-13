function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("none").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  let form = document.getElementById("userForm");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();

    const animal = parseInt(document.getElementById("animals").value);
    const fam = parseInt(document.getElementById("family").value);

      if (animal <= 2 && fam <= 2) {
        document.getElementById("javascript").removeAttribute("class");
      } else if (animal === 5 && fam === 5) {
        document.getElementById("none").removeAttribute("class");
      } else if (animal === 3 || fam === 3) {
        document.getElementById("python").removeAttribute("class");
      } else if (animal === 4 || family === 4) {
        document.getElementById("csharp").removeAttribute("class");
      } else {
        document.getElementById("ruby").removeAttribute("class");
    };
  };
})

  
// animals 1-2 && family 1-2- java
// animals 5 && family 5 - none
// animals 3 || family 3 - python
// animals 4 || family 4 - c#
// (else) - ruby