const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 100;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
let drawing = false;
let x = 0;
let y = 0;
let direction = true;

function draw(e) {
  if (!drawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = hue < 360 ? hue + 1 : 0;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  [x, y] = [e.offsetX, e.offsetY];
  ctx.stroke();
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth += 1;
  } else {
    ctx.lineWidth += -1;
  }
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  [x, y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => {
  drawing = false;
});
canvas.addEventListener('mouseleave', () => {
  drawing = false;
});
