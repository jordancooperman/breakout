function Rect() {
  var rect = document.createElement('div');
  this.class;

  this.posX;
  this.posY;

  this.velX = 0;

  this.width = 10;
  this.height = 10;

  this.target;

  this.init = function() {
    rect.className = this.class;
    document.body.appendChild(rect);
  }

  this.update = function() {
    var diff = this.target - this.posX;

    this.velX *= 0;
    diff *= 0.8;

    this.velX += diff;
    this.posX += this.velX;
  }

  this.erase = function(ctx) {
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.fill();
  };

  this.render = function(ctx) {
    ctx.fillStyle = "#5DFC0A";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.fill();
  };

  this.renderHtml = function() {
    rect.style.width = this.width + "px";
    rect.style.height = this.height + "px";
    rect.style.position = 'absolute';
    rect.style.left = this.posX + "px";
    rect.style.top = this.posY + "px";
    rect.style.backgroundColor = "#fff";
  };

};

