export default function newCanvas(src) {
  const image = document.querySelector('#load__img');
  image.setAttribute('src', src);
  const ctx = document.getElementById('canvas4');
  const canvas = ctx.getContext('2d');
  canvas.fillStyle = 'rgb(224, 224, 224)';
  canvas.fillRect(0, 0, 512, 512);
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    const width = +img.width;
    const height = +img.height;
    if (width / height === 1) {
      canvas.drawImage(img, 0, 0, ctx.width, ctx.height);
    }
    if (width / height < 1) {
      if (height < 512) {
        const coef = 512 / height;
        const widthImg = width * coef;
        const heightImg = height * coef;
        const x = (512 - widthImg) / 2;
        canvas.drawImage(img, x, 0, widthImg, heightImg);
      }
      if (height >= 512) {
        const coef = height / 512;
        const widthImg = width / coef;
        const heightImg = height / coef;
        const x = (512 - widthImg) / 2;
        canvas.drawImage(img, x, 0, widthImg, heightImg);
      }
    }
    if (width / height > 1) {
      if (width < 512) {
        const coef = 512 / width;
        const widthImg = width * coef;
        const heightImg = height * coef;
        const y = (512 - heightImg) / 2;
        canvas.drawImage(img, 0, y, widthImg, heightImg);
      }
      if (width >= 512) {
        const coef = width / 512;
        const widthImg = width / coef;
        const heightImg = height / coef;
        const y = (512 - heightImg) / 2;
        canvas.drawImage(img, 0, y, widthImg, heightImg);
      }
    }
    canvas.beginPath();
  };

  img.src = src;
  canvas.imageSmoothingEnabled = false;
  canvas.webkitImageSmoothingEnabled = false;
}

if (!localStorage.getItem('canvas')) {
  localStorage.setItem('sizeCanvas', 128);
  const canvas4 = document.getElementById('canvas4').getContext('2d');
  canvas4.fillStyle = 'rgb(224, 224, 224)';
  canvas4.fillRect(0, 0, 512, 512);
} else {
  const image = localStorage.getItem('canvas');
  localStorage.setItem('sizeCanvas', 128);
  newCanvas(image);
}
