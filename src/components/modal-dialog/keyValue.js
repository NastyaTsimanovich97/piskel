export default function keyValue() {
  const keyArray = localStorage.getItem('keyArray').split(',');
  const input = document.querySelectorAll('.form-input');
  for (let i = 0; i < input.length; i += 1) {
    input[i].value = keyArray[i];
  }
}
