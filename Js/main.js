let egg = document.images[0];
let bask = document.getElementById("bask");
let eggDamedg = document.images[2];

console.log(egg, bask, eggDamedg);

// ==========================================

// show egg in window
let random = function () {
  let number = Math.abs(
    Math.floor(Math.random() * window.innerWidth) - egg.width
  );
  return number;
};

egg.style.left = random() + "px";

//bask to right
let left = 0;
let moveRight = function () {
  left += 20;
  if (left < window.innerWidth - bask.width) {
    bask.style.left = left + "px";
  } else {
    left = window.innerWidth - bask.width;
  }
};
//bask to left
let moveleft = function () {
  let right = 0;
  left -= 20;
  if (left > 0) {
    bask.style.left = left + "px";
  } else {
    left = 0;
  }
};

// move bask right and left
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") left += 20;
  moveRight();
  if (event.key === "ArrowLeft") left -= 20;
  moveleft();
});

//egg
let moveDown = function (eggObject, top) {
  let id = setInterval(() => {
    top += 10;
    if (top < window.innerHeight - egg.height) {
      document.images[0].style.top = top + "px";
    } else {
      if (
        Math.abs(parseInt(bask.style.left) - parseInt(egg.style.left)) < 100
      ) {
        clearInterval(id);
        egg.style.visibility = "hidden";
      } else {
        egg.src = "img/Uovo_sorridente.png";
        random()
      }
    }
  }, 100);
};

moveDown(egg, 0);
