function Canvas(width, height) {

  this.ctx;

  this.make = function() {
    this.canvasElement = document.createElement( 'canvas' );
    this.canvasElement.width = screenWidth;
    this.canvasElement.height = screenHeight;
    this.ctx = this.canvasElement.getContext( '2d' );
    container = document.createElement( 'div' );
    container.className = "container";
    document.body.appendChild(container);
    container.appendChild(this.canvasElement)
}

    this.clear = function() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, screenWidth, screenHeight);
  }
}