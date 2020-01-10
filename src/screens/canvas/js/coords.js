function coords(clientX, clientY) {
  const x = clientX - 495;
  const y = clientY - 140;
  const coord = [x, y];
  return coord.join(',');
}
module.exports = coords;
