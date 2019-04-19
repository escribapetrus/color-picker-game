var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var gameResult = document.querySelector("#gameResult");
var head = document.querySelector(".head");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

colorDisplay.textContent = pickedColor;

//NEW GAME
resetButton.addEventListener("click", function() {
  head.style.backgroundColor = "steelblue";
  gameResult.textContent = " ";
  resetButton.textContent = "new colors";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

//CHOOSING GAME MODE

easyButton.addEventListener("click", function() {
  gameResult.textContent = " ";
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  head.style.backgroundColor = "steelblue";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", function() {
  gameResult.textContent = " ";
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  head.style.backgroundColor = "steelblue";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

//THE GAME
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      gameResult.textContent = "Correct!";
      resetButton.textContent = "Play again?";
      changeColors(clickedColor);
      head.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      gameResult.textContent = "Try Again!";
    }
  });
}

//GENERATING COLORS

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
