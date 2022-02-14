const clap = document.getElementById("a");
const hihat = document.getElementById("s");
const kick = document.getElementById("d");
const openhat = document.getElementById("f");
const boom = document.getElementById("g");
const ride = document.getElementById("h");
const snare = document.getElementById("j");
const tom = document.getElementById("k");
const tink = document.getElementById("l");

window.addEventListener("keydown", (e) => {
  if (e.key == "a") {
    clap.currentTime = 0;
    clap.play();
  } else if (e.key == "s") {
    hihat.currentTime = 0;

    hihat.play();
  } else if (e.key == "d") {
    kick.play();
  } else if (e.key == "f") {
    openhat.play();
  } else if (e.key == "g") {
    boom.play();
  } else if (e.key == "h") {
    ride.play();
  } else if (e.key == "j") {
    snare.play();
  } else if (e.key == "k") {
    tom.play();
  } else if (e.key == "l") {
    tink.play();
  }
});
