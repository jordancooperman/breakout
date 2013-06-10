class app.Rect
  constructor: ->
    rect = document.createElement('div')
    @class

    @posX
    @posY

    @velX = 0.1

    @width = 10
    @height = 10

    @target

  init: ->
    rect.className = @class
    document.body.appendChild(rect)

  update: ->
    diff = @target - @posX

    @velX *= 0
    diff *= 0.8

    @velX += diff
    @posX += @velX

  erase: (ctx) ->
    ctx.globalCompositeOperation = 'destination-out'
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillRect(@posX, @posY, @width, @height)
    ctx.fill()

  render: (ctx) ->
    ctx.fillStyle = "#5DFC0A"
    ctx.fillRect(@posX, @posY, @width, @height)
    ctx.fill()

  renderHtml: ->
    rect.style.width = @width + "px"
    rect.style.height = @height + "px"
    rect.style.position = 'absolute'
    rect.style.left = @posX + "px"
    rect.style.top = @posY + "px"
    rect.style.backgroundColor = "#fff"
