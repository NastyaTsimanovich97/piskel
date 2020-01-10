window.addEventListener('unload', () => {
  const ctx = document.getElementById('canvas4');
  const canvas = ctx.getContext('2d');
  canvas.imageSmoothingEnabled = false;
  canvas.webkitImageSmoothingEnabled = false;
  localStorage.setItem('canvas', ctx.toDataURL());
});

const keyArray = ['B', 'C', 'P', 'S', 'E', 'A', 'N', 'F'];
if (!localStorage.getItem('keyArray')) {
  localStorage.setItem('keyArray', keyArray);
}
