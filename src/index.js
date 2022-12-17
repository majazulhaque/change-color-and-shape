import "./styles.css";
var colorCount = 1;
var shapeCount = 1;
var circleDiv = document.getElementById("circle");
var boxDiv = document.getElementById("box");
var buttonEvent1 = document.getElementById("button1");
var buttonEvent2 = document.getElementById("button2");
function changeColor() {
  if (colorCount === 1) {
    circleDiv.style.backgroundColor = "red";
    colorCount++;
  } else if (colorCount === 2) {
    circleDiv.style.backgroundColor = "cyan";
    colorCount++;
  } else {
    circleDiv.style.backgroundColor = "blue";
    colorCount = 1;
  }
}
function changeShape() {
  if (shapeCount === 1) {
    boxDiv.style.borderRadius = "50%";
    shapeCount++;
  } else if (shapeCount === 2) {
    boxDiv.style.borderRadius = "10px 80px 10px 80px";
    shapeCount++;
  } else {
    boxDiv.style.borderRadius = "0px 0px 0px 0px";
    shapeCount = 1;
  }
}

buttonEvent1.addEventListener("click", changeColor);
buttonEvent2.addEventListener("click", changeShape);
