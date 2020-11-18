function puter() {
  let action = document.querySelector(".naga");
  action.classList.toggle("active");

  let popOut = document.querySelector(".pop-out");
  popOut.classList.toggle("muncul");

  let darkMode = document.querySelector(".wrapper");
  darkMode.classList.toggle("darkmode");

  let gravityDownLeft = document.querySelectorAll(".boxes__left > .box");
  for (let i = 0; i < gravityDownLeft.length; i++) {
    gravityDownLeft[0].style.animation = "gravitydown 10s linear infinite";
    gravityDownLeft[1].style.animation = "gravitydown 8s linear infinite";
    gravityDownLeft[2].style.animation = "gravitydown 7s linear infinite";
    gravityDownLeft[3].style.animation = "gravitydown 9s linear infinite";
    gravityDownLeft[4].style.animation = "gravitydown 9s linear infinite";
  }

  let gravityDownRight = document.querySelectorAll(".boxes__right > .box");
  for (let i = 0; i < gravityDownRight.length; i++) {
    gravityDownRight[0].style.animation = "gravityup 8s linear infinite";
    gravityDownRight[1].style.animation = "gravityup 12s linear infinite";
    gravityDownRight[2].style.animation = "gravityup 7s linear infinite";
    gravityDownRight[3].style.animation = "gravityup 9s linear infinite";
    gravityDownRight[4].style.animation = "gravityup 11s linear infinite";
  }
}
