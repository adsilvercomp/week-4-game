var wins=0;
var losses=0;
var compNumber;
var crystalNumbers=0;
var counter=0;
var maxCrystal;
var minCrystal;
var crystalNumber1;
var crystalNumber2;
var crystalNumber3;
var crystalNumber4;
var crystalNumber5;
var Congrats;
var GameOver;		



// this function causes computer to generate random number between 19 and 120.  

function compGenerate(){
	
			// this function generates compNumber

			var maxcN=120;
			var mincN=19;
			
			compNumber= compNumberFromRange(mincN,maxcN);
			function compNumberFromRange(min,max){
				return Math.floor(Math.random()*(max-min+1)+min);

				
			}

				console.log(compNumber);
				gamePlay();
						

}



//this function generates the random crystal values
function crystalGenerate(){
			 maxCrystal=12;
			 minCrystal=1;
			 crystalNumber1 = crystalNumberFromRange(minCrystal, maxCrystal);
			 crystalNumber2 = crystalNumberFromRange(minCrystal, maxCrystal);
			 crystalNumber3 = crystalNumberFromRange(minCrystal, maxCrystal);
			 crystalNumber4 = crystalNumberFromRange(minCrystal, maxCrystal);
			 crystalNumber5 = crystalNumberFromRange(minCrystal, maxCrystal);

			function crystalNumberFromRange(min,max){
				return Math.floor(Math.random()*(max-min+1)+min);
			}



	
		console.log(crystalNumber1);
		console.log(crystalNumber2);
		console.log(crystalNumber3);
		console.log(crystalNumber4);
		console.log(crystalNumber5);
}
			


// this function controls the userNnumber
function userGenerate(){
	// user clicks on crystal and their number increases by the crystals value each time it is clicked.
	
	//var increment = 
    //if the counter doesn't update, the clicks won't add up

	$( "#crystal1" ).on("click", function() {
		counter+=crystalNumber1;
  gamePlay();
});

	$( "#crystal2" ).on("click", function() {
		counter+=crystalNumber2;
  gamePlay();
});


	$( "#crystal3" ).on("click", function() {
		counter+= crystalNumber3;
  gamePlay();
});

	$( "#crystal4" ).on("click", function() {
		counter+= crystalNumber4;
  gamePlay();
});

	$( "#crystal5" ).on("click", function() {
		counter+= crystalNumber5;
  gamePlay();
});


}




	

		



 //this function updates the user interface by connecting the javascript with the html.
    function gamePlay() {
    	
    	//if the counter is equal to the computer's number, the user's wins increase by 1, the computer chooses a new random number
    	//and the crystals are assigned new random numbers.
    	if(counter===compNumber){
			wins++;
			counter=0;
			compGenerate();
			crystalGenerate();
			gamePlay();

		}

		//if the counter is equal to the computer's number, the user's losses increase by 1, the computer chooses a new random number
    	//and the crystals are assigned new random numbers.
		if(counter>compNumber){
			losses++;
			counter=0;
			compGenerate();
			crystalGenerate();
			gamePlay();
		}

		 


        //this is the scoreBoard interface.
        var html = 
        	"<h1> Crystal Collector Game <h1>"+
            "<p> click on the crystals and try to match the computer's number </p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>"+
            "<h3>Computer's Number: " + compNumber + "</h3>"+
            "<h3>User's number: " + counter + "</h3>";
    

        document.getElementById('scoreBoard').innerHTML = html;
        console.log(html);


        //if the user gets ten losses they lose the game.
        if (losses === 10) {

		            GameOver = "<h1>Game Over</h1>";

		            document.getElementById('scoreBoard').innerHTML = GameOver;
		        }

		//if the loser gets 10 wins, they win the game.
		if (wins === 10) {

		 			Congrats = "<h1>Congratulations, you are a winner!</h1>";

		            document.getElementById('scoreBoard').innerHTML = Congrats;
		        } 


    }






window.onload= function(){
	compGenerate();
	crystalGenerate();
	userGenerate();
}






 		







