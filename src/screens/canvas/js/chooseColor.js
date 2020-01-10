export default function toRgb(a, b, c) {
  return `rgb(${a}, ${b}, ${c})`;
}

function addColor(color) {
  const currentElement = document.querySelector('.circle-color');
  const prevElement = document.querySelector('.circle-prev-color');
  const prevColor = localStorage.getItem('activeColor');

  currentElement.style.backgroundColor = color;
  prevElement.style.backgroundColor = prevColor;

  localStorage.setItem('activeColor', color);
  localStorage.setItem('prevColor', prevColor);
}
function getActiveButton() {
  return localStorage.getItem('activeButton');
}

function chooseColor(el) {
  const canvasColor = document.querySelector('.canvas').getContext('2d');
  const button = getActiveButton();
  if (button === 'button__choose-color') {
    if (!el.target.classList.contains('button__choose-color') && el.target.id !== 'input__choose-color' && el.target.className !== 'label__choose-color' && el.target.id !== 'button__color') {
      if (el.target.id === 'canvas4') {
        const sizeCanvas = 512;
        const coef = sizeCanvas / (+localStorage.getItem('sizeCanvas'));
        const x = Math.floor(el.layerX / coef);
        const y = Math.floor(el.layerY / coef);
        const colorItem = canvasColor.getImageData(x, y, 1, 1).data;
        const rgbColor = toRgb(colorItem[0], colorItem[1], colorItem[2]);
        addColor(rgbColor);
      }
      if (el.target.tagName === 'H1') {
        const colorItem = getComputedStyle(el.target).color;
        addColor(colorItem);
      }
      if (el.target.id !== 'canvas4' && !el.target.classList.contains('button__icon') && el.target.id !== 'button__palette') {
        const colorItem = getComputedStyle(el.target).backgroundColor;
        addColor(colorItem);
      }
    }
  }
}


function updateAll(event) {
  addColor(event.target.value);
}
function startup() {
  const colorInput = document.querySelector('#input__choose-color');
  const defaultColor = localStorage.getItem('activeColor');
  colorInput.value = defaultColor;
  colorInput.addEventListener('change', updateAll, false);
  colorInput.select();
}
window.addEventListener('load', startup, false);
document.addEventListener('click', (el) => {
  const activeButton = localStorage.getItem('activeButton');
  if (activeButton === 'button__choose-color') {
    chooseColor(el);
  }
});
