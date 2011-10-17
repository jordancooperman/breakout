function Rect() {

  this.posX;
  this.posY;

  this.velX = 0;

  this.width = 10;
  this.height = 10;

  this.target;

  this.update = function() {
    var diff = this.target - this.posX;

    this.velX *= 0;
    diff *= 0.8;

    this.velX += diff;
    this.posX += this.velX;
  }

  this.render = function(ctx) {
    ctx.fillStyle = "#5DFC0A";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.fill();
  }
}

