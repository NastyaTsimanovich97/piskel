import { createHtmlElement, isFirstFrame, numberFrame } from './createHTMLElement';
import cleanCanvas from './cleanCanvas';
import activeFrame from './activeFrame';

const button = document.querySelector('.frame-button');

export default function addNewFrame(position, fn) {
  activeFrame('active-frame', 'remove', 'active-frame');
  activeFrame('load__active-frame', 'remove', 'load__active-frame');
  activeFrame('canvas__active-frame', 'remove', 'canvas__active-frame');

  const number = document.querySelectorAll('.number_frame');
  const heightContainer = document.querySelector('.container__all-frames');
  heightContainer.style.height = `${120 * (number.length + 1)}px`;


  const frameContainer = document.createElement('div');
  frameContainer.className = 'frame__container';
  if (fn === 'append') {
    position.append(frameContainer);
  }
  if (fn === 'after') {
    position.after(frameContainer);
  }
  frameContainer.setAttribute('draggable', 'true');

  const frameCircle = createHtmlElement('div', 'number-frame__circle', frameContainer);
  createHtmlElement('p', 'number_frame', frameCircle);

  numberFrame();

  createHtmlElement('div', 'clone-frame', frameCircle);
  createHtmlElement('div', 'delete-frame', frameCircle);
  createHtmlElement('div', 'move-frame', frameCircle);

  const canvasFrameBackground = createHtmlElement('div', 'canvas-frame_background', frameContainer);
  canvasFrameBackground.classList.add('active-frame');
  const canvas = createHtmlElement('canvas', 'canvas-frame', canvasFrameBackground);
  canvas.classList.add('canvas__active-frame');
  canvas.setAttribute('id', 'canvas-frame');
  canvas.setAttribute('width', '96');
  canvas.setAttribute('height', '96');
  const canvasImg = createHtmlElement('img', 'load__frame', canvas);
  canvasImg.classList.add('load__active-frame');

  isFirstFrame();
}

button.addEventListener('click', () => {
  const frameContainer = document.querySelector('.container__all-frames');
  addNewFrame(frameContainer, 'append');
  cleanCanvas();
});

document.addEventListener('keypress', (e) => {
  const keyArray = localStorage.getItem('keyArray').split(',');
  if (!document.body.classList.contains('modal-active')) {
    if (e.code === `Key${keyArray[6]}`) {
      const frameContainer = document.querySelector('.container__all-frames');
      addNewFrame(frameContainer, 'append');
      cleanCanvas();
    }
  }
});
