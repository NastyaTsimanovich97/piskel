import { numberFrame } from './createHTMLElement';

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('move-frame')) {
    const frame = e.target.parentElement.parentElement;
    const shiftY = e.clientY - frame.getBoundingClientRect().top;

    // frame.style.position = 'absolute'; // может удалить?
    frame.style.zIndex = 10;

    const section = document.querySelector('.container__all-frames');
    section.append(frame);
    const height = section.style.height.split('px')[0];
    // eslint-disable-next-line no-inner-declarations
    function moveAt(pageY) {
      if ((pageY - shiftY) < +height && (pageY - shiftY) > 0) {
        frame.style.top = `${pageY - shiftY}px`;
      }
    }

    moveAt(e.pageY);


    // eslint-disable-next-line no-inner-declarations
    function onMouseMove(event) {
      moveAt(event.pageY);
      e.target.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      e.target.hidden = false;
      console.log(elemBelow);
    }

    document.addEventListener('mousemove', onMouseMove);

    // document.addEventListener('mouseover', (element) => {
    //   console.log(element.target.parentElement.parentElement);
    // });

    document.addEventListener('mouseup', () => {
      numberFrame();
      // frame.style.position = '';
      // frame.style.top = '0px';
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
    });
  }
});


document.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('frame__container')) {
    return false;
  }
  return true;
});
