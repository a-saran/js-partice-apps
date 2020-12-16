const timeNode = Array.from(document.querySelectorAll("[data-time]"));

// const seconds = timeNode
//   .map(node => node.dataset.time)
//   .map(time => {
//     const [mins, sec] = time.split(":").map(parseFloat);
//     return mins * 60 + sec;
//   })
//   .reduce((acc, time) => acc + time, 0);

const seconds = timeNode.reduce((acc, timeNode) => {
  const time = timeNode.dataset.time;
  const [mins, sec] = time.split(":").map(parseFloat);
  const secs = mins * 60 + sec;
  return acc + secs;
}, 0);

console.log(seconds);
let secondsRemaining = seconds;

const hours = Math.floor(secondsRemaining / 3600);
secondsRemaining = secondsRemaining % 3600;

const mins = Math.floor(secondsRemaining / 60);
secondsRemaining = secondsRemaining % 60;

console.log(hours + " hrs", mins + " mins", secondsRemaining + " secs");
