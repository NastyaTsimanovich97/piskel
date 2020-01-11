import addNewFrame from './addNewFrame';
import cloneCanvas from './cloneCanvas';
import newCanvas from '../canvas/js/canvas';

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('clone-frame')) {
    const nextFrame = e.target.parentElement.parentElement;
    const img = e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild;
    addNewFrame(nextFrame, 'after');
    newCanvas(img.src);
    cloneCanvas(img.src);
  }
});
