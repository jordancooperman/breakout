(function() {
  app.Particle = (function() {
    function Particle(size) {
      this.posX;
      this.posY;
      this.velX = 1;
      this.velY = 1;
      this.size = size;
    }

    Particle.prototype.render = function(ctx) {
      ctx.beginPath();
      ctx.fillStyle = "#5DFC0A";
      ctx.arc(this.posX, this.posY, this.size, 0, Math.PI * 2, true);
      return ctx.fill();
    };

    Particle.prototype.update = function() {
      this.posX += this.velX;
      return this.posY += this.velY;
    };

    Particle.prototype.reverseX = function() {
      return this.velX *= -1;
    };

    Particle.prototype.reverseY = function() {
      return this.velY *= -1;
    };

    Particle.prototype.restart = function() {
      this.posX = posX;
      this.posY = posY;
      this.velX = 1;
      return this.velY = 1;
    };

    return Particle;

  })();

}).call(this);
