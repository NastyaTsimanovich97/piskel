const form = document.querySelector('.change-form');
form.addEventListener('keyup', (e) => {
  if (e.target.classList.contains('form-input')) {
    console.log(e.target.value);
  }
});
