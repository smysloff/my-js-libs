export default class Canvas2D {
  
  constructor(ctx) {
    this.ctx = ctx
    this.canvas = ctx.canvas
  }

  get fillStyle() {
    return this.ctx.fillStyle
  }

  set fillStyle(color) {
    this.ctx.fillStyle = color
  }

  get strokeStyle() {
    return this.ctx.strokeStyle
  }

  set strokeStyle(color) {
    this.ctx.strokeStyle = color
  }

  get lineWidth() {
    return this.ctx.lineWidth
  }

  set lineWidth(lineWidth) {
    this.ctx.lineWidth = lineWidth
  }

  get width() {
    return this.canvas.width
  }

  get height() {
    return this.canvas.height
  }

  get cx() {
    return Math.floor(this.width / 2)
  }
  
  get cy() {
    return Math.floor(this.height / 2)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    return this
  }

  clearRect(x, y, width, height) {
    this.#checkCountArguments(arguments.length, 4, 'clearRect')
    this.ctx.clearRect(x, y, width, height)
    return this
  }

  clearCenteredRect(cx, cy, width, height) {
    this.#checkCountArguments(arguments.length, 4, 'clearCenteredRect')
    const x = cx - Math.floor(width / 2)
    const y = cy - Math.floor(height / 2)
    this.ctx.clearRect(x, y, width, height)
    return this
  }

  rect(x, y, width, height, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 4, 'rect')
    return (lineWidth === undefined)
      ? this.fillRect(...arguments)
      : this.strokeRect(...arguments)
  }

  fillRect(x, y, width, height, color) {
    this.#checkCountArguments(arguments.length, 4, 'fillRect')
    this.#checkExtraArguments(color)
    this.ctx.fillRect(x, y, width, height)
    return this
  }

  strokeRect(x, y, width, height, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 4, 'strokeRect')
    this.#checkExtraArguments(color, lineWidth)
    this.ctx.strokeRect(x, y, width, height)
    return this
  }

  centeredRect(cx, cy, width, height, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 4, 'centeredRect')
    return (lineWidth === undefined)
      ? this.fillCenteredRect(...arguments)
      : this.strokeCenteredRect(...arguments)
  }

  fillCenteredRect(cx, cy, width, height, color) {
    this.#checkCountArguments(arguments.length, 4, 'fillCenteredRect')
    this.#checkExtraArguments(color)
    const x = cx - Math.floor(width / 2)
    const y = cy - Math.floor(height / 2)
    this.fillRect(x, y, width, height, color)
    return this
  }

  strokeCenteredRect(cx, cy, width, height, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 4, 'strokeCenteredRect')
    this.#checkExtraArguments(color, lineWidth)
    const x = cx - Math.floor(width / 2)
    const y = cy - Math.floor(height / 2)
    this.strokeRect(x, y, width, height, color, lineWidth)
    return this
  }

  circle(x, y, radius, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 3, 'circle', false)
    this.#checkExtraArguments(color, lineWidth)
    return (lineWidth === undefined)
      ? this.fillCircle(...arguments)
      : this.strokeCircle(...arguments)
  }

  fillCircle(x, y, radius, color) {
    this.#checkCountArguments(arguments.length, 3, 'fillCircle')
    if (color !== undefined) this.fillStyle = color
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
    this.ctx.fill()
    return this
  }

  strokeCircle(x, y, radius, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 3, 'strokeCircle')
    if (color !== undefined) this.strokeStyle = color
    if (lineWidth !== undefined) this.lineWidth = lineWidth
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
    this.ctx.stroke()
    return this
  }

  line(x1, y1, x2, y2, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 4, 'line')
    if (color !== undefined) this.strokeStyle = color
    if (lineWidth !== undefined) this.lineWidth = lineWidth
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
    return this
  }

    triangle(x1, y1, x2, y2, x3, y3, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 6, 'triangle')
    return (lineWidth === undefined)
      ? this.fillTriangle(...arguments)
      : this.strokeTriangle(...arguments)
  }

  fillTriangle(x1, y1, x2, y2, x3, y3, color) {
    this.#checkCountArguments(arguments.length, 6, 'fillTriangle')
    if (color !== undefined) this.fillStyle = color
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineTo(x3, y3)
    this.ctx.fill()
    return this
  }

  strokeTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth) {
    this.#checkCountArguments(arguments.length, 6, 'strokeTriangle')
    if (color !== undefined) this.strokeStyle = color
    if (lineWidth !== undefined) this.lineWidth = lineWidth
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineTo(x3, y3)
    this.ctx.lineTo(x1, y1)
    this.ctx.stroke()
    return this
  }

  #checkCountArguments(count, needle, methodName) {
    if (count < needle) {
      throw new TypeError(`Canvas2D.${methodName} requires at least ${needle} arguments but only ${count} were passed`)
    }
  }

}
