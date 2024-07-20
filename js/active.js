const textOne = document.querySelector(".answer__one");
const btnOne_plus = document.querySelector(".plus__btn-img");
const btnOne_minus = document.querySelector(".minus__btn-img");

const textTwo = document.querySelector(".answer__two");
const btnTwo_plus = document.querySelector(".plus__btn-img-two");
const btnTwo_minus = document.querySelector(".minus__btn-img-two");

const textThree = document.querySelector(".answer__three");
const btnThree_plus = document.querySelector(".plus__btn-img-three");
const btnThree_minus = document.querySelector(".minus__btn-img-three");

const textFour = document.querySelector(".answer__four");
const btnFour_plus = document.querySelector(".plus__btn-img-four");
const btnFour_minus = document.querySelector(".minus__btn-img-four");

function toggleOne() {
  if (textOne.style.display === "block") {
    textOne.style.display = "none";
  } else {
    textOne.style.display = "block";
  }
  if (
    btnOne_plus.style.display === "none" &&
    btnOne_minus.style.display === "block"
  ) {
    btnOne_plus.style.display = "block";
    btnOne_minus.style.display = "none";
  } else {
    btnOne_plus.style.display = "none";
    btnOne_minus.style.display = "block";
  }
}
function toggleTwo() {
  if (textTwo.style.display === "block") {
    textTwo.style.display = "none";
  } else {
    textTwo.style.display = "block";
  }
  if (
    btnTwo_plus.style.display === "none" &&
    btnTwo_minus.style.display === "block"
  ) {
    btnTwo_plus.style.display = "block";
    btnTwo_minus.style.display = "none";
  } else {
    btnTwo_plus.style.display = "none";
    btnTwo_minus.style.display = "block";
  }
}
function toggleThree() {
  if (textThree.style.display === "block") {
    textThree.style.display = "none";
  } else {
    textThree.style.display = "block";
  }
  if (
    btnThree_plus.style.display === "none" &&
    btnThree_minus.style.display === "block"
  ) {
    btnThree_plus.style.display = "block";
    btnThree_minus.style.display = "none";
  } else {
    btnThree_plus.style.display = "none";
    btnThree_minus.style.display = "block";
  }
}
function toggleFour() {
  if (textFour.style.display === "block") {
    textFour.style.display = "none";
  } else {
    textFour.style.display = "block";
  }
  if (
    btnFour_plus.style.display === "none" &&
    btnFour_minus.style.display === "block"
  ) {
    btnFour_plus.style.display = "block";
    btnFour_minus.style.display = "none";
  } else {
    btnFour_plus.style.display = "none";
    btnFour_minus.style.display = "block";
  }
}
