import straightLine from './straightLine';
import paintAllPixels from './paintAllPixels';

let activeButton;
if (!localStorage.getItem('activeButton')) {
  activeButton = document.querySelector('.button__pencil');
  activeButton.classList.toggle('isActive__button');
  localStorage.setItem('activeButton', 'button__pencil');
} else {
  const classActive = localStorage.getItem('activeButton');
  activeButton = document.querySelector(`.${classActive}`);
  activeButton.classList.toggle('isActive__button');
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'button__palette') {
    activeButton.classList.remove('isActive__button');
    activeButton = event.target;
    activeButton.classList.toggle('isActive__button');
    if (activeButton.classList.contains('button__choose-color')) {
      localStorage.setItem('activeButton', 'button__choose-color');
    }
    if (activeButton.classList.contains('button__pencil')) {
      localStorage.setItem('activeButton', 'button__pencil');
    }
    if (activeButton.classList.contains('button__paint-bucket')) {
      localStorage.setItem('activeButton', 'button__paint-bucket');
    }
    if (activeButton.classList.contains('button__straight')) {
      localStorage.setItem('activeButton', 'button__straight');
      straightLine();
    }
    if (activeButton.classList.contains('button__eraser')) {
      localStorage.setItem('activeButton', 'button__eraser');
    }
    if (activeButton.classList.contains('button__all-pixels')) {
      localStorage.setItem('activeButton', 'button__all-pixels');
      paintAllPixels();
    }
  }
});
document.addEventListener('keypress', (e) => {
  const classActive = localStorage.getItem('activeButton');
  activeButton = document.querySelector(`.${classActive}`);
  activeButton.classList.remove('isActive__button');
  const keyArray = localStorage.getItem('keyArray').split(',');

  if (e.code === `Key${keyArray[0]}`) {
    activeButton = document.querySelector('.button__paint-bucket');
    activeButton.classList.toggle('isActive__button');
    localStorage.setItem('activeButton', 'button__paint-bucket');
  }
  if (e.code === `Key${keyArray[1]}`) {
    activeButton = document.querySelector('.button__choose-color');
    activeButton.classList.toggle('isActive__button');
    localStorage.setItem('activeButton', 'button__choose-color');
  }
  if (e.code === `Key${keyArray[2]}`) {
    activeButton = document.querySelector('.button__pencil');
    activeButton.classList.toggle('isActive__button');
    localStorage.setItem('activeButton', 'button__pencil');
  }
  if (e.code === `Key${keyArray[3]}`) {
    activeButton = document.querySelector('.button__straight');
    activeButton.classList.toggle('isActive__button');
    localStorage.setItem('activeButton', 'button__straight');
    straightLine();
  }
  if (e.code === `Key${keyArray[4]}`) {
    activeButton = document.querySelector('.button__eraser');
    activeButton.classList.toggle('isActive__button');
    localStorage.setItem('activeButton', 'button__eraser');
  }
  if (e.code === `Key${keyArray[5]}`) {
    activeButton = document.querySelector('.button__all-pixels');
    activeButton.classList.toggle('isActive__button');
    localStorage.setItem('activeButton', 'button__all-pixels');
    paintAllPixels();
  }
});
