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

let arr = [2, 7, 8, 3];

// console.log(arr);
// console.log(1);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

console.log(arr[0]);
console.log(arr[3]);
console.log(arr.length);
console.log(arr[arr.length - 1]);

let person = {
  name: "Alan",
  age: 9,
  favCol: "yellow",
  grade: 4,
};

console.log(
  person.name +
    " is " +
    person.age +
    ", my favorite color is " +
    person.favCol +
    " I am in " +
    person.grade +
    "th grade"
);
