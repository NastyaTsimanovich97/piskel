import activeFrame from './activeFrame';

const canvas = document.querySelector('#canvas4');

export function drawImg(canvasElement, image, src) {
  image.setAttribute('src', src);
  const ctxFrame = canvasElement.getContext('2d');
  ctxFrame.imageSmoothingEnabled = false;
  ctxFrame.webkitImageSmoothingEnabled = false;
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    ctxFrame.drawImage(img, 0, 0, 96, 96);
    ctxFrame.beginPath();
  };
  img.src = src;
}

export default function cloneCanvas(src) {
  const frame = document.querySelector('.canvas__active-frame');
  const image = document.querySelector('.load__active-frame');
  drawImg(frame, image, src);
}

if (localStorage.getItem('canvas')) {
  if (localStorage.getItem('canvasFrames')) {
    const arrayFrames = localStorage.getItem('canvasFrames').split(',');
    const dataFrames = [];
    for (let i = 0; i < arrayFrames.length; i += 2) {
      dataFrames.push(`${arrayFrames[i]},${arrayFrames[i + 1]}`);
    }
    cloneCanvas(dataFrames[0]);
  } else {
    const src = localStorage.getItem('canvas');
    cloneCanvas(src);
  }
  activeFrame('canvas-frame_background', 'add', 'active-frame');
}
canvas.addEventListener('click', () => {
  localStorage.setItem('canvas', canvas.toDataURL());
  const src = localStorage.getItem('canvas');
  cloneCanvas(src);
});
