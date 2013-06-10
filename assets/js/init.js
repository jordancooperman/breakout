(function() {
  var animationLoop, brickCanvas, bricks, canvas, click, colHeight, collisionDetection, game_over, halfHeight, halfWidth, init, lastInCol, makeBrickField, mouseX, mouseY, new_game, onMouseMove, onMouseUp, paddle, particle, random;

  window.screenWidth = window.innerWidth;

  window.screenHeight = window.innerHeight;

  halfWidth = window.screenWidth / 2;

  halfHeight = window.screenHeight / 2;

  mouseX = halfWidth;

  mouseY = 0;

  brickCanvas = new app.Canvas(window.screenWidth, window.screenHeight);

  canvas = new app.Canvas(window.screenWidth, window.screenHeight);

  paddle = new app.Rect();

  particle = new app.Particle(4);

  bricks = [];

  lastInCol = [];

  paddle.width = 50;

  paddle.height = 10;

  paddle.posX = halfWidth - paddle.width / 2;

  paddle.posY = window.screenHeight - 25;

  particle.posX = halfWidth;

  particle.posY = paddle.posY - particle.size * 2;

  particle.velX = 0;

  particle.velY = -4;

  canvas.make();

  brickCanvas.make();

  colHeight = 8;

  click = false;

  game_over = false;

  new_game = false;

  onMouseMove = function(e) {
    mouseX = e.clientX;
    return mouseY = e.clientY;
  };

  onMouseUp = function() {
    return click = true;
  };

  brickCanvas.el.addEventListener('mousemove', onMouseMove, false);

  brickCanvas.el.addEventListener('mouseup', onMouseUp, false);

  animationLoop = function() {
    if (game_over === false) {
      paddle.target = mouseX - (paddle.width / 2);
      canvas.clear();
      paddle.render(canvas.ctx);
      particle.render(canvas.ctx);
      if (click === true) {
        paddle.update();
        particle.update();
        return collisionDetection();
      }
    } else {

    }
  };

  makeBrickField = function(brickCount) {
    var brick, i, maxInRow, y, _i, _results;

    this.inRow = 0;
    this.col = 0;
    this.width = 50;
    this.brickDivision = 10;
    maxInRow = Math.round(window.screenWidth / (this.width + this.brickDivision));
    brickCount = maxInRow * colHeight;
    i = 0;
    y = 0;
    _results = [];
    for (i = _i = 0; _i <= brickCount; i = _i += 1) {
      brick = new app.Rect();
      brick.width = this.width;
      brick.height = 10;
      brick.lastInCol = false;
      brick.posX = this.col * brick.width + (this.col * this.brickDivision);
      brick.posY = 10 * y + (y * this.brickDivision);
      y++;
      if (y >= colHeight) {
        y = 0;
        this.col++;
      }
      _results.push(bricks.push(brick));
    }
    return _results;
  };

  collisionDetection = function() {
    var brick, end_text, i, length, _i, _len;

    for (i = _i = 0, _len = bricks.length; _i < _len; i = ++_i) {
      brick = bricks[i];
      if (particle && brick) {
        if (particle.posY <= brick.posY + brick.height) {
          if (particle.posX >= brick.posX && particle.posX <= brick.posX + brick.width) {
            brick.erase(brickCanvas.ctx);
            bricks.splice(i, 1);
            length = lastInCol.length;
            particle.reverseY();
          }
        }
      }
    }
    if (particle.posY <= 0) {
      return particle.reverseY();
    } else if (particle.posX >= window.screenWidth || particle.posX <= 0) {
      return particle.reverseX();
    } else if (particle.posY >= paddle.posY && particle.posY <= paddle.posY + paddle.height) {
      if (particle.posX >= (mouseX - paddle.width / 2) && particle.posX <= mouseX + paddle.width / 2) {
        particle.reverseY();
        particle.velX *= 1.02;
        particle.velY *= 1.02;
        if (particle.posX <= mouseX) {
          return particle.velX += -1 - random(0, 0.6);
        } else {
          return particle.velX += 1 + random(0, 0.6);
        }
      }
    } else if (particle.posY > window.screenHeight + particle.size * 2) {
      game_over = true;
      end_text = document.createElement('div');
      end_text.id = "end_text";
      end_text.style.marginTop = halfHeight + "px";
      document.body.appendChild(end_text);
      return document.getElementById('end_text').innerHTML = "<p>Game Over</p><a href=\"#\" class=\"restart\">Play Again</a>";
    }
  };

  init = function() {
    var brick, _i, _len,
      _this = this;

    paddle.render(canvas.ctx);
    makeBrickField(99);
    for (_i = 0, _len = bricks.length; _i < _len; _i++) {
      brick = bricks[_i];
      brick.render(brickCanvas.ctx);
    }
    return setInterval(function() {
      return animationLoop();
    }, 16);
  };

  init();

  random = function(min, max) {
    return Math.random() * (max - min) + min;
  };

}).call(this);
