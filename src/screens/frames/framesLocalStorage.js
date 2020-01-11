import addNewFrame from './addNewFrame';
import { drawImg } from './cloneCanvas';

window.addEventListener('unload', () => {
  const canvasFrames = [];
  const frames = document.querySelectorAll('.canvas-frame');
  frames.forEach((i) => {
    canvasFrames.push(`${i.toDataURL()}`);
  });
  localStorage.setItem('canvasFrames', canvasFrames);
});

if (localStorage.getItem('canvasFrames')) {
  const arrayFrames = localStorage.getItem('canvasFrames').split(',');
  const dataFrames = [];
  const imgFirst = document.querySelector('#load__frame');
  for (let i = 0; i < arrayFrames.length; i += 2) {
    dataFrames.push(`${arrayFrames[i]},${arrayFrames[i + 1]}`);
  }
  imgFirst.setAttribute('src', dataFrames[0]);
  for (let i = 0; i < dataFrames.length - 1; i += 1) {
    const frameContainer = document.querySelector('.container__all-frames');
    const img = addNewFrame(frameContainer, 'append');
    const frame = img.parentElement;
    drawImg(frame, img, dataFrames[i + 1]);
  }
}
