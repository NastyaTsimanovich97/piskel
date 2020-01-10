import getFrames from './getFrames';
import { createHtmlElement } from '../frames/createHTMLElement';
import fpsFunction from './getFPS';

let imgArray = getFrames();
const containerPreview = document.querySelector('.canvas-preview__backgroud');
let previewItem = document.querySelectorAll('.preview__item');

function animatePreview(draw, duration) {
  const start = performance.now();
  let currentPreview = -1;
  let counter = duration;

  requestAnimationFrame(function animate(time) {
    previewItem = document.querySelectorAll('.preview__item');
    const fps = fpsFunction();
    const timePassed = time - start;
    if (imgArray.length - 1 < previewItem.length - 1) {
      containerPreview.removeChild(previewItem[previewItem.length - 1]);
      previewItem = document.querySelectorAll('.preview__item');
    }
    if (imgArray.length - 1 > previewItem.length - 1) {
      const element = createHtmlElement('img', 'preview__item', containerPreview);
      element.setAttribute('onmousedown', 'return false');
      element.setAttribute('onselectstart', 'return false');
      previewItem = document.querySelectorAll('.preview__item');
    }

    previewItem.forEach((item, index) => {
      item.removeAttribute('src');
      const img = item;
      img.src = imgArray[index];
    });

    previewItem = document.querySelectorAll('.preview__item');

    if (+fps === 0) {
      currentPreview = imgArray.length - 1;
    }

    if (timePassed > counter) {
      if (+fps === 0) {
        counter += duration;
      } else {
        counter += duration / +fps;
        currentPreview += 1;
        if (currentPreview >= imgArray.length) currentPreview = 0;
        draw(currentPreview);
      }
    }

    requestAnimationFrame(animate);
  });
}

animatePreview((currentPreview) => {
  imgArray = getFrames();
  if (imgArray.length - 1 === 0) {
    previewItem[currentPreview].classList.add('active-preview');
  } else if (currentPreview === 0) {
    previewItem[currentPreview].classList.add('active-preview');
    previewItem[previewItem.length - 1].classList.remove('active-preview');
  } else if (currentPreview !== 0) {
    previewItem[currentPreview].classList.add('active-preview');
    let current = currentPreview;
    previewItem[current -= 1].classList.remove('active-preview');
  }
}, 1000);
