export default function activeFrame(classElement, act, className) {
  const element = document.querySelector(`.${classElement}`);
  if (act === 'remove') {
    element.classList.remove(className);
  }
  if (act === 'add') {
    element.classList.add(className);
  }
}
