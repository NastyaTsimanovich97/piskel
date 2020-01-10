export default function closeModal() {
  const container = document.querySelector('.container__change-form');
  container.classList.add('change-form-hidden');
  container.classList.remove('container__change-form');

  const parent = document.querySelector('.main-hidden');
  parent.remove();
}
