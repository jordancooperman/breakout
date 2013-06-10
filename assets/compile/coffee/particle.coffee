class app.Particle
  constructor: (size) ->
    # the position of the particle
    @posX
    @posY

    # the velocity of the particle
    @velX = 1
    @velY = 1

    @size = size

  render: (ctx) ->
    # draw a cicle of the approrpiate size
    ctx.beginPath()
    ctx.fillStyle = "#5DFC0A"
    ctx.arc(@posX, @posY, @size, 0, Math.PI*2, true)

    # and fill it
    ctx.fill()

  update: ->
    # add velocity to the ball
    @posX += @velX
    @posY += @velY

  reverseX: ->
    @velX *= -1

  reverseY: ->
    @velY *= -1

  restart: ->
    @posX = posX
    @posY = posY

    @velX = 1
    @velY = 1
