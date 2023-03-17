let loadPercentage = document.querySelector(".percentage");
let image = document.querySelector(".image");

let currentLoad = 0;

function loadIncrement() {
  currentLoad ++;
  loadPercentage.style.opacity = scaling(currentLoad, 0, 100, 1, 0);
  loadPercentage.innerText = currentLoad + "%";
  image.style.filter = `blur(${scaling(currentLoad, 0, 100, 30, 0)}px)`;

  if (currentLoad >= 100) {
    clearInterval(Interval);
  }
}

const Interval = setInterval(loadIncrement, 50);

const scaling = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
