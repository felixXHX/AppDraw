
var cxt 
function initCanvas(ct) {
  cxt = ct
}

//线段
function drawLine(startX, startY, endX, endY, lineWidth, bgColor) {
  cxt.beginPath()
  cxt.lineWidth = lineWidth
  cxt.strokeStyle = bgColor
  cxt.moveTo(startX, startY)
  cxt.lineTo(endX, endY)
  cxt.stroke()
  cxt.fill()
}
//画圆
function drawArc(x, y, radius, startAngle, endAngle, anticlockwise, lineWidth,bgColor) {
  cxt.strokeStyle = bgColor
  cxt.beginPath()
  cxt.lineWidth = lineWidth
  cxt.arc(x,y,radius,startAngle,endAngle,anticlockwise)
  cxt.stroke()
  cxt.fillStyle= "#ffffff"
  cxt.fill()
}


















export {
  initCanvas,
  drawArc,
  drawLine,
}
