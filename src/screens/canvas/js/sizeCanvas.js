import newCanvas from './canvas';

const ctx = document.getElementById('canvas4');

export default function sizeCanvas(htmlSize) {
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
  const activeSize = document.querySelector('.active__button-range');
  if (e.target.classList.contains('button-32')) {
    activeSize.classList.remove('active__button-range');
    e.target.classList.add('active__button-range');
    localStorage.setItem('canvas', ctx.toDataURL());
    sizeCanvas(32);
    const image = localStorage.getItem('canvas');
    newCanvas(image);
  }
  if (e.target.classList.contains('button-64')) {
    activeSize.classList.remove('active__button-range');
    e.target.classList.add('active__button-range');
    localStorage.setItem('canvas', ctx.toDataURL());
    sizeCanvas(64);
    const image = localStorage.getItem('canvas');
    newCanvas(image);
  }
  if (e.target.classList.contains('button-128')) {
    activeSize.classList.remove('active__button-range');
    e.target.classList.add('active__button-range');
    localStorage.setItem('canvas', ctx.toDataURL());
    sizeCanvas(128);
    const image = localStorage.getItem('canvas');
    newCanvas(image);
  }
});
