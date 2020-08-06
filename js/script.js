const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");

/* DRAWING RECTANGLES */
const drawFillRectangle = () => {
  ctx.fillStyle = "purple";
  // fillRect(x-axis, y-axis, width, height)
  ctx.fillRect(260, 260, 30, 30);
};

const drawStrokeRectangle = () => {
  const strokeCoordinates = {
    x: 250,
    y: 250,
    width: 30,
    height: 30,
  };

  ctx.strokeStyle = "green";
  ctx.strokeRect(
    strokeCoordinates.x,
    strokeCoordinates.y,
    strokeCoordinates.width,
    strokeCoordinates.height
  );
};

/* DRAWING PATHS */

const drawRectPath = () => {
  ctx.beginPath();

  // top
  ctx.moveTo(50, 50);
  ctx.lineTo(250, 50);

  // right
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 100);

  // bottom
  ctx.moveTo(250, 100);
  ctx.lineTo(50, 100);

  // left
  ctx.moveTo(50, 100);
  ctx.lineTo(50, 50);

  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
};

/* ARCS */
const drawBullsEye = () => {
  ctx.beginPath();

  ctx.arc(150, 170, 75, 0, Math.PI * 2);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(150, 170, 55, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
};

/* TEXT */
const drawText = () => {
  ctx.fillStyle = "orange";
  ctx.font = "20px Arial";
  ctx.fillText("Ironhack", 20, 40);
};

// Second part

// create new image object
const deuceBigImage = new Image();

// set src
deuceBigImage.src = "../images/deuce.jpg";

// position
let deuceBigX = 0;
let deuceBigY = 0;

const draw = (x, y) => {
  ctx.clearRect(0, 0, 300, 300);

  ctx.drawImage(deuceBigImage, deuceBigX, deuceBigY, 100, 100);

  /* ctx.fillStyle = "green";
  ctx.fillRect(x, 0, 50, 50); */
  // changes position of X coordinate
  deuceBigX += 3;

  // calls itself every 30ms
  setTimeout(`draw(${x}, ${y})`, 30);
};
