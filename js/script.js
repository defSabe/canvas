const canvasElement = document.getElementById("example");
const context = canvasElement.getContext("2d");

/* DRAWING RECTANGLES */
const drawFillRectangle = () => {
  context.fillStyle = "purple";
  context.fillRect(260, 260, 30, 30);
};

const drawStrokeRectangle = () => {
  const strokeCoordinates = {
    x: 250,
    y: 250,
    width: 30,
    height: 30,
  };

  context.strokeStyle = "green";
  context.strokeRect(
    strokeCoordinates.x,
    strokeCoordinates.y,
    strokeCoordinates.width,
    strokeCoordinates.height
  );
};

/* DRAWING PATHS */

const drawRectPath = () => {
  context.beginPath();

  // top
  context.moveTo(50, 50);
  context.lineTo(250, 50);

  // right
  context.moveTo(250, 50);
  context.lineTo(250, 100);

  // bottom
  context.moveTo(250, 100);
  context.lineTo(50, 100);

  // left
  context.moveTo(50, 100);
  context.lineTo(50, 50);

  context.strokeStyle = "black";
  context.stroke();
  context.closePath();
};

/* ARCS */
const drawBullsEye = () => {
  context.beginPath();

  context.arc(150, 170, 75, 0, Math.PI * 2);
  context.strokeStyle = "green";
  context.lineWidth = 20;
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(150, 170, 55, 0, Math.PI * 2);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
};

/* TEXT */
const drawText = () => {
  context.fillStyle = "orange";
  context.font = "20px Arial";
  context.fillText("Ironhack", 20, 40);
};

// Second part

// create new image object
const deuceBigImage = new Image();

// set src
deuceBigImage.src = "../images/deuce.jpg";

const draw = (x, y) => {
  context.clearRect(0, 0, 300, 300);

  context.drawImage(deuceBigImage, 0, 0, 100, 100);

  /* context.fillStyle = "green";
  context.fillRect(x, 0, 50, 50); */
  // changes position of X coordinate
  deuceBigX += 3;

  // calls itself every 30ms
  setTimeout(`draw(${x}, ${y})`, 30);
};
