class app.Canvas
  constructor: (width, height) ->
    @width = width
    @height = height

  make: ->
    @el = document.createElement 'canvas'
    @el.width = window.screenWidth
    @el.height = window.screenHeight
    @el.style.position = "absolute"
    @el.style.top = '0'
    @el.style.left = '0'
    @ctx = @el.getContext( '2d' )
    container = document.createElement( 'div' )
    container.className = "container"
    document.body.appendChild(container)
    container.appendChild @el

  clear: ->
      @ctx.fillStyle = "black"
      @ctx.fillRect(0, 0, screenWidth, window.screenHeight)
