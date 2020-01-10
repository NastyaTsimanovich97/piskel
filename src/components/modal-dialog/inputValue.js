const form = document.querySelector('.change-form');
const exit = document.querySelector('.btn-exit');
form.addEventListener('keyup', (e) => {
  const keyArray = localStorage.getItem('keyArray');
  if (!['CapsLock', 'ShiftRight', 'ShiftLeft', 'Backspace'].includes(e.code)) {
    if (e.target.classList.contains('form-input')) {
      if (keyArray.includes(e.target.value)) {
        e.target.nextElementSibling.classList.add('error-container__active');
        form.addEventListener('keydown', () => {
          e.target.nextElementSibling.classList.remove('error-container__active');
        });
        exit.addEventListener('click', () => {
          e.target.nextElementSibling.classList.remove('error-container__active');
        });
      }
    }
  }
});
