import newCanvas from './canvas';

const ctx = document.getElementById('canvas4');

function sizeCanvas(htmlSize) {
  localStorage.setItem('sizeCanvas', htmlSize);
  ctx.removeAttribute('width');
  ctx.removeAttribute('height');
  ctx.setAttribute('width', htmlSize);
  ctx.setAttribute('height', htmlSize);
  const canvas = ctx.getContext('2d');
  canvas.imageSmoothingEnabled = false;
  canvas.webkitImageSmoothingEnabled = false;
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-32')) {
    localStorage.setItem('canvas', ctx.toDataURL());
    sizeCanvas(32);
    const image = localStorage.getItem('canvas');
    newCanvas(image);
  }
  if (e.target.classList.contains('button-64')) {
    localStorage.setItem('canvas', ctx.toDataURL());
    sizeCanvas(64);
    const image = localStorage.getItem('canvas');
    newCanvas(image);
  }
  if (e.target.classList.contains('button-128')) {
    localStorage.setItem('canvas', ctx.toDataURL());
    sizeCanvas(128);
    const image = localStorage.getItem('canvas');
    newCanvas(image);
  }
});
