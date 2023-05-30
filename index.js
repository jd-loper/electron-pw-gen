document.addEventListener("DOMContentLoaded", function () {
  const genButton = document.getElementById("genBttn");
  const pwCard = document.getElementById("pw");

  genButton.addEventListener("click", function () {
    pwCard.textContent = "Testing";
  });
});
