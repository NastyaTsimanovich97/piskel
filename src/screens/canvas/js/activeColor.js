export const currentElement = document.querySelector('.circle-color');
export const prevElement = document.querySelector('.circle-prev-color');

let currentColor;
let prevColor;

if (!localStorage.getItem('activeColor')) {
  currentColor = getComputedStyle(currentElement).backgroundColor;
  localStorage.setItem('activeColor', currentColor);

  prevColor = getComputedStyle(prevElement).backgroundColor;
  localStorage.setItem('prevColor', prevColor);
} else {
  currentColor = localStorage.getItem('activeColor');
  currentElement.style.background = currentColor;

  prevColor = localStorage.getItem('prevColor');
  prevElement.style.background = prevColor;
}

const colorGroup = document.querySelector('#color-group');
colorGroup.addEventListener('click', (el) => {
  if (el.target.id === 'button__color') {
    if (!el.target.classList.contains('button__current-color')) {
      const activeElement = el.target.firstChild;
      currentColor = getComputedStyle(activeElement).backgroundColor;
      currentElement.style.background = currentColor;

      prevColor = localStorage.getItem('activeColor');
      prevElement.style.background = prevColor;

      localStorage.setItem('activeColor', currentColor);
      localStorage.setItem('prevColor', prevColor);
    }
  }
});
