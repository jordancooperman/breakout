
window.screenWidth = window.innerWidth
window.screenHeight = window.innerHeight
halfWidth = window.screenWidth / 2
halfHeight = window.screenHeight / 2

# mouse position
mouseX = halfWidth
mouseY = 0

# create the necessary objects
brickCanvas = new app.Canvas window.screenWidth, window.screenHeight
canvas = new app.Canvas window.screenWidth, window.screenHeight
paddle = new app.Rect()
particle = new app.Particle(4)
bricks = []
lastInCol = []

# configure objects
paddle.width = 50
paddle.height = 10
paddle.posX = halfWidth - paddle.width/2
paddle.posY = window.screenHeight - 25

particle.posX = halfWidth
particle.posY = paddle.posY - particle.size*2
particle.velX = 0
particle.velY = -4

canvas.make()
brickCanvas.make()

colHeight = 8
click = false
game_over = false
new_game = false

# event handler functions
onMouseMove = (e) ->
  mouseX = e.clientX
  mouseY = e.clientY

onMouseUp = ->
  click = true

brickCanvas.el.addEventListener 'mousemove', onMouseMove, false
brickCanvas.el.addEventListener 'mouseup', onMouseUp, false

# setInterval ->
#   console.log bricks
# , 500

animationLoop = ->
  if game_over == false
    paddle.target = mouseX - (paddle.width/2)

    canvas.clear()

    paddle.render canvas.ctx
    particle.render canvas.ctx

    if click == true
      paddle.update()
      particle.update()
      collisionDetection()
  else
    return

makeBrickField = (brickCount) ->
  @inRow = 0
  @col = 0
  @width = 50
  @brickDivision = 10
  maxInRow = Math.round(window.screenWidth/(@width + @brickDivision))
  brickCount = maxInRow * colHeight

  i = 0
  y = 0

  for i in [0..brickCount] by 1
    brick = new app.Rect()
    brick.width = @width
    brick.height = 10
    brick.lastInCol = false

    brick.posX = @col * brick.width + (@col * @brickDivision)

    brick.posY = 10 * y + (y * @brickDivision)
    y++

    if y >= colHeight
      y = 0
      @col++

    bricks.push brick

collisionDetection = ->
  for brick, i in bricks
    if particle and brick
      if particle.posY <= brick.posY + brick.height
        if particle.posX >= brick.posX and particle.posX <= brick.posX + brick.width
          brick.erase brickCanvas.ctx
          bricks.splice i, 1

          length = lastInCol.length
          particle.reverseY()

  # detect if the particle hits the walls
  # ...and reverse its dipaddleion
  if particle.posY <= 0
    particle.reverseY()

  else if particle.posX >= window.screenWidth or particle.posX <= 0
    particle.reverseX()

  # detect if the particle hits the paddle
  # ...and reverse its dipaddleion
  else if particle.posY >= paddle.posY && particle.posY <= paddle.posY + paddle.height

    if particle.posX >= (mouseX - paddle.width/2) and particle.posX <= mouseX + paddle.width/2
      particle.reverseY()
      particle.velX *= 1.02
      particle.velY *= 1.02

      if particle.posX <= mouseX
        particle.velX += -1-random(0,0.6)

      else
        particle.velX += 1+random(0,0.6)

   else if particle.posY > window.screenHeight + particle.size*2
       game_over = true
       end_text = document.createElement 'div'
       end_text.id = "end_text"
       end_text.style.marginTop = halfHeight + "px"
       document.body.appendChild end_text
       document.getElementById('end_text').innerHTML = "<p>Game Over</p><a href=\"#\" class=\"restart\">Play Again</a>"


init = ->
  paddle.render canvas.ctx
  makeBrickField 99

  for brick in bricks
    brick.render brickCanvas.ctx

  setInterval =>
    animationLoop()
  , 16

init()


# assorted functions
random = (min, max) ->
  Math.random()*(max-min) + min
