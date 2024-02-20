let questions = document.getElementsByClassName("questions");

let i;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    let answerArr = document.getElementsByClassName("answer");
    for (let j = 0; j < answerArr.length; j++) {
      if (answerArr[j].style.display === "block") {
        answerArr[j].style.display = "none";
        let questionEl = answerArr[j].previousElementSibling;
        // console.log(questionEl);
        questionEl.getElementsByClassName("plus")[0].src =
          "./assets/images/icon-plus.svg";
      }
    }
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
