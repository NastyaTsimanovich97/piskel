export default function changeKey() {
  const input = document.querySelectorAll('.form-input');
  const inputValue = [];
  input.forEach((i) => inputValue.push(i.value));
  localStorage.setItem('keyArray', inputValue);
  const button = document.querySelectorAll('.btn-key');
  for (let i = 0; i < inputValue.length; i += 1) {
    button[i].innerText = `(${inputValue[i]})`;
  }
}
