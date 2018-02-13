// jquery funciton ready
$(document).ready(function() {
// global variables
var wins = 0;
var losses = 0;
var yourGuess;
var computerGuess;
var showImage;
var images = ["assets/images/rock.jpg", "assets/images/paper.png", "assets/images/scissors.png"]
var count = 0;

// on.click buttons
$("#playBtn").on("click", function() {
	console.log('play btn was clicked');
	startSlideshow()
});
$("#retryBtn").on("click", function() {
	console.log('retry btn was clicked');
	stopSlideshow ()
	$('#yourGuessImg').attr("src","assets/images/rps.png");
	startSlideshow()
});
$("#rockBtn").on("click", function() {
	console.log('rock btn was clicked');
	$('#yourGuessImg').attr("src","assets/images/rock.jpg");
	stopSlideshow ();
	yourGuess= 0;
	winLoss();
	console.log(wins+ "wins");
	console.log(losses+ "losses");
	$('#Wins').html("Wins: " + wins)
	$('#losses').html("losses: " + losses)
});
$("#paperBtn").on("click", function() {
	console.log('paper btn was clicked');
	$('#yourGuessImg').attr("src","assets/images/paper.png");
	stopSlideshow ()
	yourGuess= 1;
	winLoss();
	console.log(wins+ "wins");
	console.log(losses+ "losses");
	$('#Wins').html("Wins: " + wins)
	$('#losses').html("losses: " + losses)
});
$("#scissorsBtn").on("click", function() {
	console.log('scissors btn was clicked');
	$('#yourGuessImg').attr("src","assets/images/scissors.png")
	stopSlideshow ();
	yourGuess= 2;
	winLoss();
	console.log(wins+ "wins");
	console.log(losses+ "losses");
	$('#Wins').html("Wins: " + wins)
	$('#losses').html("losses: " + losses)
});
// wins, losses
function winLoss(){
if ((count == 0 && yourGuess == 1) || (count == 2 && yourGuess == 0)) {
	wins++;
}
if ((count == 1 && yourGuess == 2) || (count == 1 && yourGuess == 0) || (count == 2 && yourGuess == 1) || (count == 0 && yourGuess == 2)) {
	losses++;
}
}
// computer
function displayImage(){
	$("#computerImg").attr("src", images[count]);
}
function nextImage() {
  count++;
  $("#computerImg").attr("src", images[count]);
	setTimeout(displayImage, 2000);
  if(count === images.length){
    count = 0;
  }
}
function startSlideshow() {
  showImage = setInterval(nextImage, 200);
}
function stopSlideshow() {
  clearInterval(showImage);
}


});

