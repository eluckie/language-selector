function hideResultsAndError() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("none").setAttribute("class", "hidden");
  document.getElementById("error-message").setAttribute("class", "hidden");
}
// function addressUser() {
//  let userName = document.getElementById("user-name").value;
//  document.getElementById("name").innerHTML = userName;
// }

window.addEventListener("load", function() {
  let form = document.getElementById("userForm");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
//    addressUser();

    const animal = parseInt(document.getElementById("animals").value);
    const fam = parseInt(document.getElementById("family").value);
    const userName = document.getElementById("user-name").value;
    const bday = document.getElementById("birthday").value;

      if (userName && bday && animal <= 2 && fam <= 2) {
        document.getElementById("javascript").removeAttribute("class");
      } else if (userName && bday && animal === 5 && fam === 5) {
        document.getElementById("none").removeAttribute("class");
      } else if (userName && bday && animal === 3 || fam === 3) {
        document.getElementById("python").removeAttribute("class");
      } else if (userName && bday && animal === 4 || family === 4) {
        document.getElementById("csharp").removeAttribute("class");
      } else if (userName && bday) {
        document.getElementById("ruby").removeAttribute("class");
      } else {
        document.getElementById("error-message").removeAttribute("class");
      }
    };
  })