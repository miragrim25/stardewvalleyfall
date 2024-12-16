// variables keep our code short
var m = document.getElementById("myModal");
var s = document.getElementById("sam");
//maze variables
var swapCounter = 1;

var element1id;
var element1source;

var element2id;
var element2source;

var tileSelected;
let deathOccurring = true;
function showModal() {
  // https://www.w3schools.com/howto/howto_css_modals.asp
  // https://www.w3schools.com/css/css_positioning.asp
  // essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
  document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function changeOpen() {
  window.location.href = "1.html";
}
function changeMaze() {
  window.location.href = "2.html";
}
function changeEnd() {
  window.location.href = "3.html";
}

function swapElements(t) {
  generalid = t.getAttribute("id");
  if (swapCounter === 1) {
    //var el1 = t;
    element1id = t.getAttribute("id");
    element1source = t.getAttribute("src");
    swapCounter++;
    document.getElementById(element1id).classList.add("green");
    tileSelected = true;
  } else if (swapCounter === 2) {
    //var el2 = t;
    document.getElementById("slide").play();
    element2id = t.getAttribute("id");
    element2source = t.getAttribute("src");
    var parentid = document.getElementById(element2id).parentElement.id;
    swapCounter++;
    document.getElementById(element2id).src = element1source;
    document.getElementById(element1id).src = element2source;
    document.getElementById(element1id).classList.remove("green");
    tileSelected = false;
    swapCounter = 1;

    setTimeout(correctMaze, 1000);

    return element1id;
  }
}

function correctMaze() {
  if (
    r1c1.src.match("images/right.png") &&
    r1c2.src.match("images/right.png") &&
    r1c3.src.match("images/down.png") &&
    r1c5.src.match("images/up.png") &&
    r1c6.src.match("images/left.png") &&
    r2c1.src.match("images/up.png") &&
    r2c3.src.match("images/right.png") &&
    r2c4.src.match("images/down.png") &&
    r2c6.src.match("images/up.png") &&
    r3c1.src.match("images/up.png") &&
    r3c2.src.match("images/left.png") &&
    r3c4.src.match("images/down.png") &&
    r3c6.src.match("images/up.png") &&
    r4c2.src.match("images/up.png") &&
    r4c4.src.match("images/down.png") &&
    r4c6.src.match("images/up.png") &&
    r5c1.src.match("images/right.png") &&
    r5c2.src.match("images/up.png") &&
    r5c4.src.match("images/right.png") &&
    r5c5.src.match("images/right.png") &&
    r5c6.src.match("images/up.png")
  ) {
    document.getElementById("next").classList.remove("none");
    document.getElementById("farmer2").classList.remove("none");
    document.getElementById("farmer1").classList.add("none");
  }
}

function samDeath() {
  if (deathOccurring == true) {
    console.log("sam death...");
    document.getElementById("chest1").classList.add("none");
    document.getElementById("chestaudio").play();
    s.src = "images/sam/sam1.png";
    setTimeout(function () {
      s.src = "images/sam/sam2.png";
    }, 200);
    setTimeout(function () {
      s.src = "images/sam/sam3.png";
    }, 300);
    setTimeout(function () {
      s.src = "images/sam/sam4.png";
    }, 400);
    setTimeout(function () {
      s.src = "images/sam/sam5.png";
    }, 500);
    setTimeout(function () {
      s.src = "images/sam/sam6.png";
    }, 600);
    setTimeout(function () {
      s.src = "images/sam/sam7.png";
    }, 700);
    setTimeout(function () {
      s.src = "images/sam/sam8.png";
    }, 800);
    setTimeout(function () {
      s.src = "images/sam/sam9.png";
    }, 900);
    setTimeout(function () {
      s.src = "images/sam/sam10.png";
    }, 1000);
    setTimeout(function () {
      s.src = "images/sam/sam11.png";
    }, 1100);
    document.getElementById("penny").classList.remove("none");
    document.getElementById("sebastian1").classList.add("none");
    document.getElementById("sebastian2").classList.remove("none");
    console.log("death done");
    s.setAttribute("onclick", "noteAcquired()");
    deathOccurring = false;
  }
}

function nextRoom() {
  window.location.href = "https://isabela-222.github.io/WINTER/";
}

function noteAcquired() {
  document.getElementById("note").style.display = "flex";
}

const backgroundMusic = new Audio("audio/stardew.mp3");

backgroundMusic.loop = true;

const playbackState = getCookie("musicPlaybackState");

if (playbackState === "playing") {
  const currentTime = parseFloat(getCookie("musicCurrentTime"));
  backgroundMusic.currentTime = currentTime;
  backgroundMusic.play();
} else {
  backgroundMusic.play();
}

window.addEventListener("beforeunload", () => {
  setCookie(
    "musicPlaybackState",
    backgroundMusic.paused ? "paused" : "playing"
  );
  setCookie("musicCurrentTime", backgroundMusic.currentTime);
});

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : null;
}
