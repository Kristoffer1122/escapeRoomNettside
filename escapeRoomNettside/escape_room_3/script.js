let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
let img = new Image();
img.src = "../images/image.png";
img.onload = function() {
  context.drawImage(img, 350, 150);
};
canvas.addEventListener("mousemove", function(e) {
  let pos = {
    x: canvas.offsetLeft,
    y: canvas.offsetTop,
  };
  let x = e.pageX - pos.x;
  let y = e.pageY - pos.y;
  let c = context.getImageData(x, y, 1, 1).data;
  console.log(c);

  if (c[0] == 0) {
    window.location.replace("../landing_page/index.html");
  } else if (c[0] == 255) {
    localStorage.setItem("level3passed", true);
    window.location.replace("../landing_page/index.html");
  }
});

function rgbToHex(r, g, b) {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

let rat = [];
console.log(rat.map)
