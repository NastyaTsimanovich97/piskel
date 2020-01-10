function fullScreen() {
  if (document.fullscreenEnabled) {
    const element = document.querySelector('.canvas-preview__backgroud');
    if ('requestFullScreen' in element) {
      element.requestFullscreen();
    } else if ('webkitRequestFullscreen' in element) {
      element.webkitRequestFullscreen();
    }
  }
}

const fullScreenButton = document.querySelector('.flscreen-button');
fullScreenButton.addEventListener('click', fullScreen);

document.addEventListener('keypress', (e) => {
  const keyArray = localStorage.getItem('keyArray').split(',');

  if (e.code === `Key${keyArray[7]}`) {
    fullScreen();
  }
});
