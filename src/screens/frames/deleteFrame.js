import { isFirstFrame, numberFrame } from './createHTMLElement';
import clickFrame from './clickFrame';

document.addEventListener('click', (e) => {
  const container = document.querySelector('.container__all-frames');
  if (e.target.classList.contains('delete-frame')) {
    const sibling = e.target.parentElement.parentElement.previousElementSibling;
    const nextFrame = e.target.parentElement.parentElement.nextElementSibling;
    e.target.parentElement.parentElement.remove();
    if (sibling === null) {
      nextFrame.classList.add('first-frame__container');
      nextFrame.firstElementChild.lastElementChild.classList.add('move-frame__first');
      nextFrame.firstElementChild.childNodes[2].classList.add('delete-frame__first');
      nextFrame.firstElementChild.childNodes[0].innerHTML = '1';
    }
    if (e.target.parentElement.nextElementSibling.classList.contains('active-frame')) {
      if (sibling === null || nextFrame !== null) {
        const canvas = nextFrame.childNodes[1].firstElementChild;
        clickFrame(nextFrame.childNodes[1], canvas, canvas.firstElementChild);
      } else {
        const border = document.querySelectorAll('.canvas-frame_background');
        const canvas = border[border.length - 1].firstElementChild;
        clickFrame(border[border.length - 1], canvas, canvas.firstElementChild);
      }
    }
    const height = container.style.height.split('px');
    container.style.height = `${+height[0] - 120}px`;
    isFirstFrame();
    numberFrame();
  }
});
