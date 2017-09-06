var wins=0;
var losses=0;
var compNumber;
var crystalNumbers=0;
var counter=0;

		



// this section causes computer to generate random number between 19 and 120  
// and asigns crystals a random value between 1 and 12.

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

			var maxCrystal=12;
			var minCrystal=1;
			var crystalNumber1 = crystalNumberFromRange(minCrystal, maxCrystal);
			var crystalNumber2 = crystalNumberFromRange(minCrystal, maxCrystal);
			var crystalNumber3 = crystalNumberFromRange(minCrystal, maxCrystal);
			var crystalNumber4 = crystalNumberFromRange(minCrystal, maxCrystal);
			var crystalNumber5 = crystalNumberFromRange(minCrystal, maxCrystal);

			function crystalNumberFromRange(min,max){
				return Math.floor(Math.random()*(max-min+1)+min);
			}



	
		console.log(crystalNumber1);
		console.log(crystalNumber2);
		console.log(crystalNumber3);
		console.log(crystalNumber4);
		console.log(crystalNumber5);

			


// this function controls the userNnumber
function userGenerate(){
	// user clicks on crystal and their number increases by the crystals value each time it is clicked.
	
	//var increment = 
    //if the counter doesn't update, the clicks won't add up

	$( "#crystal1" ).on("click", function() {
		counter+=crystalNumber1;
  alert( "The user score has increased to " + counter);
  gamePlay();
});

	$( "#crystal2" ).on("click", function() {
		counter+=crystalNumber2;
  alert( "The user score has increased to " + counter );
  gamePlay();
});


	$( "#crystal3" ).on("click", function() {
		counter+= crystalNumber3;
  alert( "The user score has increased to " + counter );
  gamePlay();
});

	$( "#crystal4" ).on("click", function() {
		counter+= crystalNumber4;
  alert( "The user score has increased to " + counter );
  gamePlay();
});

	$( "#crystal5" ).on("click", function() {
		counter+= crystalNumber5;
  alert( "The user score has increased to " + counter );
  gamePlay();
});


}




	

		



 //this function updates the user interface by connecting the javascript with the html.
    function gamePlay() {

    	if(counter===compNumber){
			wins=+1;
			counter=0;
			compGenerate();
			gamePlay();
			console.log("winner");
		}

		if(counter>compNumber){
			losses=+1;
			counter=0;
			compGenerate();
			gamePlay();
		}



        //this is the scoreBoard interface.
        var html = 
            "<p> click on the crystals and try to match the computer's number </p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>";
    

        document.getElementById('scoreBoard').innerHTML = html;
        console.log(html);



       //this is the number the computer generates
        var html2 = 
            
            "<p>Computer's Number: " + compNumber + "</p>";


        document.getElementById('CompNumber').innerHTML = html2;
        console.log(html2);


        //this is the number the computer generates
        var html3 = 

            "<p>User's number: " + counter + "</p>";


        document.getElementById('playerNumber').innerHTML = html3;
        console.log(html3);



    }






window.onload= function(){
	compGenerate();
	userGenerate();
}






 		







