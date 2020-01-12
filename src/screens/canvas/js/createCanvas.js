import newCanvas from './canvas';
import sizeCanvas from './sizeCanvas';

if (!localStorage.getItem('canvas')) {
  const canvas4 = document.getElementById('canvas4').getContext('2d');
  canvas4.imageSmoothingEnabled = false;
  canvas4.webkitImageSmoothingEnabled = false;
  canvas4.fillStyle = 'rgb(224, 224, 224)';
  canvas4.fillRect(0, 0, 512, 512);
} else {
  const image = localStorage.getItem('canvas');
  localStorage.getItem('sizeCanvas');
  newCanvas(image);
}
if (!localStorage.getItem('sizeCanvas')) {
  localStorage.setItem('sizeCanvas', 128);
  const sizeButton = document.querySelector(`.button-${localStorage.getItem('sizeCanvas')}`);
  sizeButton.classList.add('active__button-range');
} else {
  const sizeButton = document.querySelector(`.button-${localStorage.getItem('sizeCanvas')}`);
  sizeButton.classList.add('active__button-range');
  sizeCanvas(localStorage.getItem('sizeCanvas'));
}
