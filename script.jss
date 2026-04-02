const panda = document.getElementById("panda");
const rope = document.getElementById("rope");
const helpText = document.getElementById("helpText");
const banner = document.getElementById("banner");
const message = document.getElementById("message");
const music = document.getElementById("music");

let dragged = false;

/* Panda walking animation */
setTimeout(() => {
  panda.style.left = "200px";
}, 1000);

/* Panda jumping */
let jumpCount = 0;
let jumpInterval = setInterval(() => {
  panda.style.bottom = "120px";
  setTimeout(() => {
    panda.style.bottom = "80px";
  }, 300);

  jumpCount++;
  if (jumpCount >= 3) {
    clearInterval(jumpInterval);
    helpText.style.display = "block";
  }
}, 800);

/* Drag rope */
rope.addEventListener("mousedown", () => {
  dragged = true;
});

document.addEventListener("mouseup", () => {
  dragged = false;
});

document.addEventListener("mousemove", (e) => {
  if (dragged) {
    rope.style.height = e.clientY + "px";

    if (e.clientY > 300) {
      triggerSurprise();
    }
  }
});

/* Surprise Trigger */
function triggerSurprise() {
  banner.style.top = "20px";
  helpText.style.display = "none";
  music.play();
  typeMessage();
  confettiEffect();
}

/* Typing Message */
const text = "You are truly special 🌸\nMay your day be filled with smiles, laughter and little surprises.\nStay the amazing person you are 💖\nHappy Birthday once again 🎂";

let i = 0;
function typeMessage() {
  if (i < text.length) {
    message.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeMessage, 40);
  }
}

/* Confetti */
function confettiEffect() {
  const confetti = document.getElementById("confetti");

  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = "5px";
    div.style.height = "5px";
    div.style.background = "randomColor()";
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = "-10px";

    confetti.appendChild(div);

    let fall = setInterval(() => {
      div.style.top = parseInt(div.style.top) + 5 + "px";
    }, 30);
  }
}

function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}
