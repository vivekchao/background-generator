var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(firstColor, secondColor) {
	body.style.background = 
	"linear-gradient(to right, " + firstColor + ", " + secondColor + ")";
}

function setBackground() {
	setGradient(color1.value, color2.value);
	css.textContent = body.style.background + ";";
}

//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {			
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomBackground() {
	setGradient(getRandomColor(), getRandomColor());
	css.textContent = body.style.background + ";";
}

setBackground();
color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
button.addEventListener("click", setRandomBackground);