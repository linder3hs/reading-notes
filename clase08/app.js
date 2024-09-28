const githubButton = document.getElementById("github-button");
const linkedinButton = document.getElementById("linkedin-button");

// para indicar que cuando hagamos click en el boton de github abra una nueva ventana
// vamos a usar el siguiente codigo
githubButton.addEventListener("click", function () {
  window.open("https://github.com/linder3hs");
});

linkedinButton.addEventListener("click", function () {
  window.open("https://linkedin.com/in/linderhassinger");
});
