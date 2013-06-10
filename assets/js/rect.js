(function() {
  app.Rect = (function() {
    function Rect() {
      var rect;

      rect = document.createElement('div');
      this["class"];
      this.posX;
      this.posY;
      this.velX = 0.1;
      this.width = 10;
      this.height = 10;
      this.target;
    }

    Rect.prototype.init = function() {
      rect.className = this["class"];
      return document.body.appendChild(rect);
    };

    Rect.prototype.update = function() {
      var diff;

      diff = this.target - this.posX;
      this.velX *= 0;
      diff *= 0.8;
      this.velX += diff;
      return this.posX += this.velX;
    };

    Rect.prototype.erase = function(ctx) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(this.posX, this.posY, this.width, this.height);
      return ctx.fill();
    };

    Rect.prototype.render = function(ctx) {
      ctx.fillStyle = "#5DFC0A";
      ctx.fillRect(this.posX, this.posY, this.width, this.height);
      return ctx.fill();
    };

    Rect.prototype.renderHtml = function() {
      rect.style.width = this.width + "px";
      rect.style.height = this.height + "px";
      rect.style.position = 'absolute';
      rect.style.left = this.posX + "px";
      rect.style.top = this.posY + "px";
      return rect.style.backgroundColor = "#fff";
    };

    return Rect;

  })();

}).call(this);
