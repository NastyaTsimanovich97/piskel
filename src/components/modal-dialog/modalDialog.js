import './modal.scss';
import './inputValue';
import { createHtmlElement } from '../../screens/frames/createHTMLElement';
import keyValue from './keyValue';
import changeKey from './changeKeyValue';
import closeModal from './closeModalDialog';


const buttonModal = document.querySelector('.change-button');
buttonModal.addEventListener('click', () => {
  const container = document.querySelector('.change-form-hidden');
  container.classList.add('container__change-form');
  container.classList.remove('change-form-hidden');
  const parent = document.querySelector('.main');

  createHtmlElement('div', 'main-hidden', parent);
  document.body.style.overflowY = 'hidden';
  document.body.classList.add('modal-active');
  keyValue();
});

const buttonExit = document.querySelector('.btn-exit');
buttonExit.addEventListener('click', () => {
  document.body.classList.remove('modal-active');
  closeModal();
});

const buttonChange = document.querySelector('.btn-change');
buttonChange.addEventListener('click', () => {
  changeKey();

  closeModal();
  document.body.classList.remove('modal-active');
});
