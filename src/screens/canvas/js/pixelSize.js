export default function setPixel() {
  if (!localStorage.getItem('pxSize')) {
    localStorage.setItem('pxSize', '1');
  }
  return +localStorage.getItem('pxSize');
}
document.addEventListener('click', (e) => {
  switch (e.target.className) {
    case ('px_size__1-unit'):
      localStorage.setItem('pxSize', '1');
      break;
    case ('px_size__2-unit'):
      localStorage.setItem('pxSize', '2');
      break;
    case ('px_size__3-unit'):
      localStorage.setItem('pxSize', '3');
      break;
    case ('px_size__4-unit'):
      localStorage.setItem('pxSize', '4');
      break;
    default:
      break;
  }
});
