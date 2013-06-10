(function() {
  app.Canvas = (function() {
    function Canvas(width, height) {
      this.width = width;
      this.height = height;
    }

    Canvas.prototype.make = function() {
      var container;

      this.el = document.createElement('canvas');
      this.el.width = window.screenWidth;
      this.el.height = window.screenHeight;
      this.el.style.position = "absolute";
      this.el.style.top = '0';
      this.el.style.left = '0';
      this.ctx = this.el.getContext('2d');
      container = document.createElement('div');
      container.className = "container";
      document.body.appendChild(container);
      return container.appendChild(this.el);
    };

    Canvas.prototype.clear = function() {
      this.ctx.fillStyle = "black";
      return this.ctx.fillRect(0, 0, screenWidth, window.screenHeight);
    };

    return Canvas;

  })();

}).call(this);
