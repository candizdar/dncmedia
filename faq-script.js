let toggleStatus1 = 1;
let toggleStatus2 = 1;
let toggleStatus3 = 1;
let toggleStatus4 = 1;

function returnHome() {
  window.location.assign("index.html");
}

if (toggleStatus1 == 1) {
  document.getElementById("answer-1").style.display = "none";
  document.getElementById("icon-1").style.rotate = "0deg";
  toggleStatus1 = 0;
} else {
  document.getElementById("answer-1").style.display = "block";
  document.getElementById("icon-1").style.rotate = "180deg";
  toggleStatus1 = 1;
}

if (toggleStatus2 == 1) {
  document.getElementById("answer-2").style.display = "none";
  document.getElementById("icon-2").style.rotate = "0deg";
  toggleStatus2 = 0;
} else {
  document.getElementById("answer-2").style.display = "block";
  document.getElementById("icon-2").style.rotate = "180deg";
  toggleStatus2 = 1;
}

if (toggleStatus3 == 1) {
  document.getElementById("answer-3").style.display = "none";
  document.getElementById("icon-3").style.rotate = "0deg";
  toggleStatus3 = 0;
} else {
  document.getElementById("answer-3").style.display = "block";
  document.getElementById("icon-3").style.rotate = "180deg";
  toggleStatus3 = 1;
}

if (toggleStatus4 == 1) {
  document.getElementById("answer-4").style.display = "none";
  document.getElementById("icon-4").style.rotate = "0deg";
  toggleStatus4 = 0;
} else {
  document.getElementById("answer-4").style.display = "block";
  document.getElementById("icon-4").style.rotate = "180deg";
  toggleStatus4 = 1;
}

function toggleMenu(a) {
  if (a == 1) {
    if (toggleStatus1 == 1) {
      document.getElementById("answer-1").style.display = "none";
      document.getElementById("icon-1").style.rotate = "0deg";
      toggleStatus1 = 0;
    } else {
      document.getElementById("answer-1").style.display = "block";
      document.getElementById("icon-1").style.rotate = "180deg";
      toggleStatus1 = 1;
    }
  } else if (a == 2) {
    if (toggleStatus2 == 1) {
      document.getElementById("answer-2").style.display = "none";
      document.getElementById("icon-2").style.rotate = "0deg";
      toggleStatus2 = 0;
    } else {
      document.getElementById("answer-2").style.display = "block";
      document.getElementById("icon-2").style.rotate = "180deg";
      toggleStatus2 = 1;
    }
  } else if (a == 3) {
    if (toggleStatus3 == 1) {
      document.getElementById("answer-3").style.display = "none";
      document.getElementById("icon-3").style.rotate = "0deg";
      toggleStatus3 = 0;
    } else {
      document.getElementById("answer-3").style.display = "block";
      document.getElementById("icon-3").style.rotate = "180deg";
      toggleStatus3 = 1;
    }
  } else if (a == 4) {
    if (toggleStatus4 == 1) {
      document.getElementById("answer-4").style.display = "none";
      document.getElementById("icon-4").style.rotate = "0deg";
      toggleStatus4 = 0;
    } else {
      document.getElementById("answer-4").style.display = "block";
      document.getElementById("icon-4").style.rotate = "180deg";
      toggleStatus4 = 1;
    }
  }
}
