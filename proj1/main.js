const maxPresses = 10;
let count = 0;

const button = document.getElementById("dangerButton");
const status = document.getElementById("status");
const panel = document.getElementById("panel");

button.addEventListener("click", () => {
  count += 1;
  const remaining = maxPresses - count;

  if (remaining > 0) {
    status.textContent = `残り ${remaining} 回`;
    button.textContent = "まだ押す";
  } else {
    triggerExplosion();
  }
});

function triggerExplosion() {
  button.disabled = true;
  button.textContent = "BOOM";
  status.textContent = "爆発しました！";
  panel.classList.add("exploded");

  const flash = document.createElement("div");
  flash.className = "flash-overlay";
  document.body.appendChild(flash);

  setTimeout(() => flash.remove(), 600);
}

