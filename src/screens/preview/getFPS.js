const fpsInput = document.querySelector('.fps_input');
const containerFps = document.querySelector('.fps-number');

export default function fpsFunction() {
  containerFps.innerHTML = fpsInput.value;
  localStorage.setItem('fps', fpsInput.value);
  return fpsInput.value;
}

if (!localStorage.getItem('fps')) {
  fpsInput.value = '1';
  fpsFunction();
} else {
  fpsInput.value = localStorage.getItem('fps');
  fpsFunction();
}

fpsInput.addEventListener('click', () => {
  localStorage.setItem('fps', fpsInput.value);
  fpsFunction();
});
