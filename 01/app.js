"use strict";

window.addEventListener("keydown", (e) => {
  // Playing the sound when the key is pressed
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio == null) return;
  audio.play();
  audio.currentTime = 0;

  // Changing the class on when the key is pressed
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  key.addEventListener("transitionend", () => {
    key.classList.remove("playing");
  });
});
