function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 500, 500);
  ctx.save();

  ctx.fillStyle = '#09F';
  ctx.fillRect(15, 15, 500, 500);

  ctx.save();
  ctx.fillStyle = '#FFF';
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 500, 500);

  ctx.restore();
  ctx.fillRect(45, 45, 500,500);

  ctx.restore();
  ctx.fillRect(60, 60, 500,500);
}draw();