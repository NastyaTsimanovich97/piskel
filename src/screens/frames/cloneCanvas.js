import activeFrame from './activeFrame';

const canvas = document.querySelector('#canvas4');

export default function cloneCanvas(src) {
  const frame = document.querySelector('.canvas__active-frame');
  const image = document.querySelector('.load__active-frame');
  image.setAttribute('src', src);
  const ctxFrame = frame.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    ctxFrame.drawImage(img, 0, 0, 96, 96);
    ctxFrame.beginPath();
  };
  img.src = src;
}

if (localStorage.getItem('canvas')) {
  const src = localStorage.getItem('canvas');
  cloneCanvas(src);
  activeFrame('canvas-frame_background', 'add', 'active-frame');
}
canvas.addEventListener('click', () => {
  localStorage.setItem('canvas', canvas.toDataURL());
  const src = localStorage.getItem('canvas');
  cloneCanvas(src);
});
