var numSquares = 9;
var colors = [];
var pickedColor = randomColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeBtns();
  setupSquares();
  reset();
}
  
function setupModeBtns(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      if(this.textContent === "Easy"){
        numSquares = 3;
      }else if(this.textContent === "Medium"){
        numSquares = 6;
      }else{
        numSquares = 9;
      }
			reset();
	});
   }
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  	//add click listeners to squares
  	squares[i].addEventListener("click", function(){
  		//grab color of clicked square
  		var clickedColor = this.style.background;
  		//compare color to pickedColor
  		//console.log(clickedColor, pickedColor);
  		if(clickedColor === pickedColor){
  			changeColors(clickedColor);
  			Correct();
  		}
  		else{
  			this.style.background = "#232323";
  			Wrong();
  		}
  	   });	
    }
}

function reset(){
 	colors = generateRandomColors(numSquares);
 	pickedColor = randomColor();
 	colorDisplay.textContent = pickedColor;
 	resetButton.textContent = "New Colors";
 	messageDispaly.textContent = "";
 	for (var i = 0; i < squares.length; i++) {
 		if(colors[i]){
 			squares[i].style.background = colors[i];
 			squares[i].style.display = "block";
 		} else {
		 	squares[i].style.display = "none";
		}
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

  
// easyBtn.addEventListener("click", function(){
//  easyBtn.classList.add("selected");
//  hardBtn.classList.remove("selected");
//  numSquares = 3;
//  colors = generateRandomColors(numSquares);
//  pickedColor = randomColor();
//  colorDisplay.textContent = pickedColor;

//  for(var i = 0; i < squares.length; i++){
//    if(colors[i]){
//      squares[i].style.background = colors[i];
//    }
//    else{
//      squares[i].style.display = "none";
//    }
//  }
//  resetDisplay();
// });

// hardBtn.addEventListener("click", function(){
//  easyBtn.classList.remove("selected");
//  hardBtn.classList.add("selected");
//  numSquares = 6;
//  colors = generateRandomColors(numSquares);
//  pickedColor = randomColor();
//  colorDisplay.textContent = pickedColor;

//  for(var i = 0; i < squares.length; i++){
//      squares[i].style.background = colors[i];
//      squares[i].style.display = "block";
//  }
//  resetDisplay();
// });

// resetButton.addEventListener("click", function(){
//  //generate all new colors
//  colors = generateRandomColors(numSquares);
//  //pick a new random color form array
//  pickedColor = randomColor();
//  //change colorDisplay to match picked color
//  colorDisplay.textContent = pickedColor;
//  this.textContent = "New Colors";
//  //change colors of squares
//  for (var i = 0; i < squares.length; i++) {
//    squares[i].style.background = colors[i];
//  }
//  resetDisplay();
// });


 function changeColors(color){
 	//loop through all squares
 	for(var i = 0; i < squares.length; i++){
 		//change each squares color to match given color
 		squares[i].style.background = color;
 	}
 }

 function randomColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function Correct(){
 	messageDispaly.textContent = "Correct!";
 	resetButton.textContent = "Play Again"
 	h1.style.background = pickedColor;
 	//colorDisplay.style.color = pickedColor;
 }

 function Wrong(){
 	messageDispaly.textContent = "Try Again!";
 	h1.style.background = "steelblue";
 }

 function generateRandomColors(num){
 	//make an array
 	var arr = []
 	//repeat mum times
 	for(var i =0; i < num; i++){
 		//get random color and push into arr
 		arr.push(randomRgb());
 	}
 	//return that array
 	return arr;
 }

 function randomRgb(){
 	//pick a "red" form 0 - 255
 	var r = Math.floor(Math.random() * 256);
 	//pick a "green" form 0 - 255
 	var g = Math.floor(Math.random() * 256);
 	//pick a "bule" form 0 - 255
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }

 