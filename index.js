let interval;
const btn1 = document.querySelector("#start");
const btn2 = document.querySelector("#stop");

let colorcode = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(colorcode());

btn1.addEventListener("click", function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    document.querySelector("body").style.backgroundColor = colorcode();
  }, 1000);
});

btn2.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});
