function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // if there is no audio then stop function from running
  audio.currentTime = 0; // rewind to start of sound for continuous playing time
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if it is not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); // select all keys and remove transition
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
