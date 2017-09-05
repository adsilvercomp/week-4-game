var wins=0;
var losses=0;
var compNumber;
var crystalNumbers;
var counter=0;


		



// this section causes computer to generate random number between 19 and 120  
// and asigns crystals a random value between 1 and 12.

function compGenerate(){
	
			// this function generates compNumber

			var maxcN=120;
			var mincN=19;
			
			var compNumber= compNumberFromRange(mincN,maxcN);
			function compNumberFromRange(min,max){
				return Math.floor(Math.random()*(max-min+1)+min);

				
				
			}

				console.log(compNumber);
			
			

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
});

	$( "#crystal2" ).on("click", function() {
		counter+=crystalNumber2;
  alert( "The user score has increased to " + counter );
});


	$( "#crystal3" ).on("click", function() {
		counter+= crystalNumber3;
  alert( "The user score has increased to " + counter );
});

	$( "#crystal4" ).on("click", function() {
		counter+= crystalNumber4;
  alert( "The user score has increased to " + counter );
});

	$( "#crystal5" ).on("click", function() {
		counter+= crystalNumber5;
  alert( "The user score has increased to " + counter );
});




}


 //this function updates the user interface by connecting the javascript with the html.
    function gamePlay() {


        //this is the user interface.
        var html = 
            "<p> click on the crystals and try to match the computer's number</p>" +
            "<p>wins:" + wins + "</p>" +
            "<p>losses:" + losses + "</p>" +
            "<p>Computer Number" + compNumber+ "</p>"+
            "<p>User Number" + counter + "</p>";

        console.log(html);

        document.getElementById('scoreBoard').innerHTML = html;





    }






window.onload= function(){
	compGenerate();
	userGenerate();
	gamePlay();
}






 		







