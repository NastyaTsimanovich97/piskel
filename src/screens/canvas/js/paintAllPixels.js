export default function paintAllPixels() {
  const canvas = document.querySelector('#canvas4');
  canvas.addEventListener('click', () => {
    const activeButton = localStorage.getItem('activeButton');
    if (activeButton === 'button__all-pixels') {
      const ctx = canvas.getContext('2d');
      const color = localStorage.getItem('activeColor');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 512, 512);
    }
  });
}


const activeButton = localStorage.getItem('activeButton');

if (activeButton === 'button__all-pixels') {
  paintAllPixels();
}
