import Tool from "./tool";

export default class Rect extends Tool {
 constructor(canvas) {
  super(canvas);
  this.listen()
 }

 listen() {
  this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  this.canvas.onmousedown = this.mouseDownHandler.bind(this);
  this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
 }

 mouseUpHandler(e) {
  this.mouseDown = false;
 };

 mouseDownHandler(e) {
  this.mouseDown = true;
  this.ctx.beginPath();
  this.startX = e.pageX - e.target.offsetLeft;
  this.startY = e.pageY - e.target.offsetTop;
 };

 mouseMoveHandler(e) {
  if (this.mouseDown) {
   const currentX = e.pageX - e.target.offsetLeft,
    currentY = e.pageY - e.target.offsetTop,
    width = currentX - this.startX,
    height = currentY - this.startY;

   this.draw(this.startX, this.startY, width, height);
  }
 };

 draw(x, y, w, h) {
  this.ctx.rect(x,y, w, h);
  this.ctx.fill();
  this.ctx.stroke();
 }
}
