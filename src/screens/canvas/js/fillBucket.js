const canvas = document.querySelector('.canvas');

function forEachNeighbor(point, fn) {
  fn({ x: point.x - 1, y: point.y });
  fn({ x: point.x + 1, y: point.y });
  fn({ x: point.x, y: point.y - 1 });
  fn({ x: point.x, y: point.y + 1 });
}

function isSameColor(data, point1, point2) {
  const offset1 = (point1.x + point1.y * data.width) * 4;
  const offset2 = (point2.x + point2.y * data.width) * 4;

  for (let i = 0; i < 4; i += 1) {
    if (data.data[offset1 + i] !== data.data[offset2 + i]) {
      return false;
    }
  }
  return true;
}

function relativePos(event, element) {
  const rect = element.getBoundingClientRect();
  const sizeCanvas = 512;
  const coef = sizeCanvas / (+localStorage.getItem('sizeCanvas'));
  return {
    x: Math.floor((event.clientX - rect.left) / coef),
    y: Math.floor((event.clientY - rect.top) / coef),
  };
}

function fillBucket(event) {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const sample = relativePos(event, ctx.canvas);
  const isPainted = new Array(imageData.width * imageData.height);
  const toPaint = [sample];
  while (toPaint.length) {
    const current = toPaint.pop();
    const id = current.x + current.y * imageData.width;
    // eslint-disable-next-line no-continue
    if (isPainted[id]) continue;
    else {
      ctx.fillRect(current.x, current.y, 1, 1);
      isPainted[id] = true;
    }
    forEachNeighbor(current, (neighbor) => {
      if (neighbor.x >= 0 && neighbor.x < imageData.width
            && neighbor.y >= 0 && neighbor.y < imageData.height
            && isSameColor(imageData, sample, neighbor)) {
        toPaint.push(neighbor);
      }
    });
  }
}

canvas.addEventListener('click', (el) => {
  const activeButton = localStorage.getItem('activeButton');
  if (activeButton === 'button__paint-bucket') {
    fillBucket(el);
  }
});
