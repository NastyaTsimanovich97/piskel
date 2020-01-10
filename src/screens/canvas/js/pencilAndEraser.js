import setPixel from './pixelSize';

let paint;
let eraser;
let mousedown;

function redraw(x, y) {
  const ctx = document.getElementById('canvas4').getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.globalCompositeOperation = 'source-over';
  if (paint === true) {
    ctx.fillStyle = localStorage.getItem('activeColor');
    ctx.fillRect(x - 1, y - 1, setPixel(), setPixel());
  }
  if (eraser === true) {
    ctx.fillStyle = 'rgb(224, 224, 224)';
    ctx.fillRect(x - 1, y - 1, 4, 4);
    ctx.globalCompositeOperation = 'destination-out';
  }
}


const canvas = document.getElementById('canvas4');
const sizeCanvas = 512;

canvas.addEventListener('mousedown', (e) => {
  const activeButton = localStorage.getItem('activeButton');
  const coef = sizeCanvas / (+localStorage.getItem('sizeCanvas'));
  if (activeButton === 'button__pencil') {
    if (activeButton) {
      paint = true;
      mousedown = true;
    }
    redraw(Math.floor(e.layerX / coef), Math.floor(e.layerY / coef));
  }
  if (activeButton === 'button__eraser') {
    mousedown = true;
    eraser = true;
    redraw(Math.floor(e.layerX / coef), Math.floor(e.layerY / coef));
  }
});

canvas.addEventListener('mousemove', (e) => {
  const coef = sizeCanvas / (+localStorage.getItem('sizeCanvas'));
  if (mousedown) {
    redraw(Math.floor(e.layerX / coef), Math.floor(e.layerY / coef));
  }
});

canvas.addEventListener('mouseup', () => {
  paint = false;
  mousedown = false;
  eraser = false;
});

canvas.addEventListener('mouseleave', () => {
  paint = false;
  eraser = false;
});
