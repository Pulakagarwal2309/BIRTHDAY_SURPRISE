const panda = document.getElementById("panda");
const rope = document.getElementById("rope");
const help = document.getElementById("help");
const banner = document.getElementById("banner");
const msg = document.getElementById("msg");
const music = document.getElementById("music");

/* Panda walk */
setTimeout(() => {
  panda.style.left = "250px";
}, 1000);

/* Jump animation */
let jumps = 0;
let jumpAnim = setInterval(() => {
  panda.style.bottom = "120px";
  setTimeout(() => panda.style.bottom = "50px", 300);

  jumps++;
  if (jumps == 3) {
    clearInterval(jumpAnim);
    help.style.display = "block";
  }
}, 800);

/* Drag (Mobile + PC) */
let dragging = false;

rope.addEventListener("mousedown", () => dragging = true);
rope.addEventListener("touchstart", () => dragging = true);

document.addEventListener("mouseup", () => dragging = false);
document.addEventListener("touchend", () => dragging = false);

document.addEventListener("mousemove", moveRope);
document.addEventListener("touchmove", moveRope);

function moveRope(e) {
  if (!dragging) return;

  let y = e.clientY || e.touches[0].clientY;
  rope.style.height = y + "px";

  if (y > 300) trigger();
}

/* Surprise */
function trigger() {
  banner.style.top = "20px";
  help.style.display = "none";
  music.play();
  typeText();
}

/* Typing */
let text = "You are a truly amazing person 🌸\nStay happy, keep smiling and keep shining ✨\nWishing you a day full of happiness 🎂";

let i = 0;
function typeText() {
  if (i < text.length) {
    msg.innerHTML += text[i];
    i++;
    setTimeout(typeText, 40);
  }
}
