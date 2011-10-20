function Particle(size) {

  // the position of the particle
  this.posX;
  this.posY;

  // the velocity of the particle
  this.velX = 1;
  this.velY = 1;

  this.size = size;

  this.render = function(ctx) {

    // draw a cicle of the approrpiate size
    ctx.beginPath();
    ctx.fillStyle = "#5DFC0A";
    ctx.arc(this.posX, this.posY, this.size, 0, Math.PI*2, true)

    // and fill it
    ctx.fill();
  };

  this.update = function() {
    // add velocity to the ball
    this.posX += this.velX;
    this.posY += this.velY;
  };

  this.reverseX = function() {
    this.velX *= -1;
  }

  this.reverseY = function() {
    this.velY *= -1;
  }

  this.restart = function() {
    this.posX = posX;
    this.posY = posY;

    this.velX = 1;
    this.velY = 1;
  };

}
