/*
 * @Descripttion:塔吊示意图和附着示意图需要的canvas方法
 * @Author: Alice
 * @Date: 2020-10-21 08:45:05
 */
var cxt // 声明context对象,该对象拥有丰富的绘图的API
// 初始化
function initCanvas(ct) {
  cxt = ct
}
// 绘制不规则图形：塔吊开头
function drawIrregular(startX, startY, X2, Y2, endX, lineWidth, bgColor, text, isCircle) {
  // cxt.beginPath()
  cxt.strokeStyle = bgColor
  cxt.lineWidth = lineWidth
  cxt.moveTo(startX, startY)
  cxt.lineTo(X2, Y2)
  cxt.lineTo(endX, Y2)
  cxt.lineTo(endX, startY)
  // 闭合路径，开始和结尾
  cxt.closePath()
  cxt.stroke()
  // 绘制里面的圆形
  // 兼容不需要绘制圆形的,如果传值,则不绘制
  if (isCircle === undefined) {
    const X = X2 + endX / 2
    const Y = (startY + Y2) / 2
    drawArc(X, Y, 10, 0, 360, false, true, '#000', text)
  }
}
// 绘制矩形
function drawRect(x, y, width, height, bgColor, text) {
  // 边线颜色
  cxt.strokeStyle = bgColor
  // 绘制矩形
  cxt.strokeRect(x, y, width, height)
  // 绘制里面的圆形
  drawArc(x + width / 2, y + height / 2, 10, 0, 360, false, true, '#000', text)
}
/** 绘制圆弧
 * 主要是使用的是canvas原生的API:
 * arc(x,y,radius,startAngle,endAngle,anticlockwise);
 * @param {*} x :圆心X坐标
 * @param {*} y :圆心Y坐标
 * @param {*} radius :圆的半径
 * @param {*} startAngle :开始的弧度，直接传度数即可
 * @param {*} endAngle :结束的弧度，直接传度数即可
 * @param {*} anticlockwise :true为逆时针，false为顺时针
 * ------------------------------自己封装参数--------------------------
 * @param {*} isOnlyArc :一般选择true
 * @param {*} bgColor
 * 注意:如果要绘制圆形那么只需要调用该方法，传入的startAngle和endAngle是0度和360度即可。
 */
function drawArc(x, y, radius, startAngle, endAngle, anticlockwise, isOnlyArc, bgColor, text) {
  cxt.strokeStyle = bgColor
  // 开始一个新的绘制路径
  cxt.beginPath()
  cxt.arc(x, y, radius, getAngle(startAngle), getAngle(endAngle), anticlockwise)
  if (isOnlyArc) { // 绘制边框的另一种情况就是仅仅绘制弧边不需要调用closePath()

  } else { // 否则就是不仅绘制边框还得绘制起点和终点的连线，需要调用了closePath();
    cxt.closePath()
  }
  cxt.stroke()
  // 绘制里面的小序号
  if (text) {
    drawText(text, x, y + 4, '#000', '微软雅黑', 'center')
  }
}
// 绘制线段
function drawLine(startX, startY, endX, endY, lineWidth, bgColor) {
  cxt.beginPath()
  cxt.lineWidth = lineWidth
  cxt.strokeStyle = bgColor
  cxt.moveTo(startX, startY)
  cxt.lineTo(endX, endY)
  cxt.stroke()
  cxt.fill()
}
// 绘制矩形2
function drawRect2(x, y, width, height, bgColor, text) {
  // 边线颜色
  cxt.strokeStyle = bgColor
  // 绘制矩形
  cxt.strokeRect(x, y, width, height)
  // 绘制里面的文字
  drawText(text, x + width / 2, y + height / 2 + 3, '#000', '微软雅黑', 'center')
}
// 附着示意图的卡扣
function drawSnap(startX, startY, X2, Y2, X3, Y3, X4, X5, EndX, EndY, length, bgColor) {
  // 上边
  cxt.beginPath()
  // 边线颜色
  cxt.strokeStyle = bgColor
  //  从卡扣的拐点处开始画起，最后起点和终点相连接
  cxt.moveTo(startX, startY)
  cxt.lineTo(X2, Y2)
  cxt.lineTo(X3, Y3)
  cxt.lineTo(X4, startY)
  cxt.lineTo(X5, startY)
  cxt.lineTo(X5, EndY - length)
  cxt.lineTo(EndX, EndY - length)
  cxt.lineTo(EndX, startY)
  cxt.closePath() // 闭合路径
  cxt.stroke()

  // 下边
  cxt.beginPath()
  // 边线颜色
  cxt.strokeStyle = bgColor
  // 从卡扣的拐点处开始画起，最后起点和终点相连接
  startY += length
  EndY += length
  Y2 += length
  Y3 += length
  cxt.moveTo(startX, startY)
  cxt.lineTo(X2, Y2)
  cxt.lineTo(X3, Y3)
  cxt.lineTo(X4, startY)
  cxt.lineTo(X5, startY)
  cxt.lineTo(X5, EndY + length)
  cxt.lineTo(EndX, EndY + length)
  cxt.lineTo(EndX, startY)

  cxt.closePath() // 闭合路径
  cxt.stroke()
}
// 绘制吊钩
// 分析吊钩组成：直线+270度圆
function drawHook(X, startY, endY, radius, startAngle, endAngle, anticlockwise, isOnlyArc, lineWidth, bgColor, text1, text2) {
  // 绘制细线三步
  cxt.save() // 第一步
  cxt.translate(0.5, 0.5) // 第二步
  // 垂直线
  drawLine(X, startY, X, endY, lineWidth, bgColor)
  // 270度圆弧
  drawArc(X - 3, endY, radius, startAngle, endAngle, anticlockwise, isOnlyArc, bgColor)
  // 垂直线
  const h1 = 15
  drawLine(X - 3, endY, X - 3, endY + h1, lineWidth, bgColor)
  cxt.restore() // 第三步
  // 绘制矩形
  drawRect2(X - 12, endY + h1, 20, 15, bgColor, text1)
  // 绘制箭头
  const h2 = 8
  drawArrow(X - 30, endY + h2, X - 3, endY + h2, lineWidth, bgColor, text2)
}
// 绘制箭头
// 拆分成三条线
function drawArrow(startX, startY, endX, endY, lineWidth, bgColor, text) {
  cxt.save() // 第一步
  cxt.translate(0.5, 0.5) // 第二步
  // 中间长线
  drawLine(startX, startY, endX, endY, lineWidth, bgColor)
  // 箭头上部分
  drawLine(endX, endY, endX - 3, endY - 3, lineWidth, bgColor)
  // 箭头下部分
  drawLine(endX, endY, endX - 3, endY + 3, lineWidth, bgColor)
  cxt.restore()
  // 在中间线的上面绘制米数
  drawText(text, startX + 10, startY - 2, '#000', '微软雅黑', 'center')
}
// 文字
function drawText(text, x, y, color, font, textAlign) {
  cxt.font = font
  cxt.textAlign = textAlign
  cxt.fillStyle = color
  cxt.fillText(text, x, y)
}
// 将角度转换成弧度函数，
function getAngle(arc) {
  return Math.PI * (arc / 180)
}
export {
  initCanvas,
  drawIrregular,
  drawRect,
  drawRect2,
  drawArc,
  drawLine,
  drawText,
  drawSnap,
  drawHook
}
