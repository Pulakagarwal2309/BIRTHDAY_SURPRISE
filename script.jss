const panda = document.getElementById("panda");
const rope = document.getElementById("rope");
const help = document.getElementById("help");
const banner = document.getElementById("banner");
const msg = document.getElementById("msg");
const music = document.getElementById("music");

let triggered = false;

/* 🐼 Panda walk */
setTimeout(() => {
  panda.style.left = "250px";
}, 1000);

/* 🐼 Jump animation */
let jumps = 0;
let jumpAnim = setInterval(() => {
  panda.style.bottom = "120px";

  setTimeout(() => {
    panda.style.bottom = "50px";
  }, 300);

  jumps++;

  if (jumps >= 3) {
    clearInterval(jumpAnim);
    help.style.display = "block"; // ✅ FIXED
  }
}, 800);

/* 🪢 DRAG FIX (WORKING FOR BOTH MOBILE + PC) */
let isDragging = false;

rope.addEventListener("mousedown", () => isDragging = true);
rope.addEventListener("touchstart", () => isDragging = true);

document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("touchend", () => isDragging = false);

document.addEventListener("mousemove", dragRope);
document.addEventListener("touchmove", dragRope);

function dragRope(e) {
  if (!isDragging || triggered) return;

  let y = e.clientY || (e.touches && e.touches[0].clientY);

  if (!y) return;

  rope.style.height = y + "px";

  // 🎯 Trigger condition
  if (y > 300) {
    triggered = true;
    triggerSurprise();
  }
}

/* 🎉 Surprise */
function triggerSurprise() {
  banner.style.top = "20px";
  help.style.display = "none";

  music.play().catch(() => {
    console.log("User interaction needed");
  });

  typeText();
}

/* ✍️ Typing message */
let text = "You are truly special 🌸\nStay happy and keep smiling always ✨\nWishing you a beautiful birthday 🎂";

let i = 0;

function typeText() {
  if (i < text.length) {
    msg.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 40);
  }
}
