export default function cleanCanvas() {
  const image = document.querySelector('#load__img');
  image.removeAttribute('src');
  const canvas = document.getElementById('canvas4').getContext('2d');
  canvas.fillStyle = 'rgb(224, 224, 224)';
  canvas.fillRect(0, 0, 512, 512);
}
