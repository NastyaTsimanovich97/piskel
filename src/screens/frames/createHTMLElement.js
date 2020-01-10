export function createHtmlElement(tagName, className, parent) {
  const element = document.createElement(tagName);
  element.className = className;
  parent.append(element);
  return element;
}

export function isFirstFrame() {
  const section = document.querySelector('.container__all-frames');
  if (section.childElementCount > 1) {
    const buttonDelete = document.querySelector('.delete-frame__first');
    buttonDelete.style.display = 'block';

    const buttonMove = document.querySelector('.move-frame__first');
    buttonMove.style.display = 'block';

    return false;
  }

  const buttonDelete = document.querySelector('.delete-frame__first');
  buttonDelete.style.display = 'none';

  const buttonMove = document.querySelector('.move-frame__first');
  buttonMove.style.display = 'none';

  return true;
}

export function numberFrame() {
  const number = document.querySelectorAll('.number_frame');
  for (let i = 0; i < number.length; i += 1) {
    number[i].innerHTML = `${i + 1}`;
  }
}
