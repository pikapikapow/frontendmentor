let questions = document.getElementsByClassName("questions");

let i;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    // this.classList.toggle("open");

    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      this.getElementsByClassName("plus")[0].src =
        "./assets/images/icon-plus.svg";
    } else {
      answer.style.display = "block";
      this.getElementsByClassName("plus")[0].src =
        "./assets/images/icon-minus.svg";
    }
  });
}
