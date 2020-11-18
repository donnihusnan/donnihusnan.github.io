function puter() {
  let action = document.querySelector(".naga");
  action.classList.toggle("active");

  let popOut = document.querySelector(".pop-out");
  popOut.classList.toggle("muncul");

  let darkMode = document.querySelector(".wrapper");
  darkMode.classList.toggle("darkmode");

  let gravityDownLeft = document.querySelectorAll(".boxes__left > .box");
  for (let i = 0; i < gravityDownLeft.length; i++) {
    gravityDownLeft[i].style.animation = "gravitydown 5s linear infinite";
  }

  let gravityDownRight = document.querySelectorAll(".boxes__right > .box");
  for (let i = 0; i < gravityDownRight.length; i++) {
    gravityDownRight[i].style.animation = "gravityup 5s linear infinite";
  }
}
