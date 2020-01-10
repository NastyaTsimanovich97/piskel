import activeFrame from './activeFrame';
import newCanvas from '../canvas/js/canvas';

export default function clickFrame(border, canvas, img) {
  border.classList.add('active-frame');
  canvas.classList.add('canvas__active-frame');
  img.classList.add('load__active-frame');

  newCanvas(img.src);
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'canvas-frame') {
    activeFrame('active-frame', 'remove', 'active-frame');
    activeFrame('load__active-frame', 'remove', 'load__active-frame');
    activeFrame('canvas__active-frame', 'remove', 'canvas__active-frame');

    clickFrame(e.target.parentElement, e.target, e.target.firstElementChild);
  }
});
