var colors = [
  "red",
  "blue",
  "yellow",
  "lightgrey",
  "darkorchid",
  "black",
  "orange",
  "deeppink",
  "green",
  "purple",
  "saddlebrown",
  "lightseagreen",
  "deepskyblue",
  "firebrick",
  "crimson",
];
var intervalID;

function getRandomColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function addBall() {
  var ballRow = $(".ball-row");
  var ball = $("<div></div>");
  ball.addClass("ball");
  ball.addClass(getRandomColor());
  ballRow.append(ball);
}

function startStacking() {
  intervalID = setInterval(addBall, 1000); // add a ball every 1 second
}

function stopStacking() {
  clearInterval(intervalID);
}

var startBtn = $("#start-btn");
var stopBtn = $("#stop-btn");

startBtn.click(startStacking);
stopBtn.click(stopStacking);
