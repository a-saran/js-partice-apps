const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function mouseMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playBackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playBackRate.toFixed(2) + " x";
  video.playbackRate = playBackRate;
  console.log(playBackRate);
}

speed.addEventListener("mousemove", mouseMove);
