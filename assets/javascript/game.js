var wins=0;
var losses=0;
var compNumber;
var crystalNumbers;
var userNumber;
counter=0;


			
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



		console.log(compNumber);
		console.log(crystalNumber1);
		console.log(crystalNumber2);
		console.log(crystalNumber3);
		console.log(crystalNumber4);
		console.log(crystalNumber5);



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


			
			

}

			


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





window.onload= function(){
	compGenerate()
	userGenerate();
}






 		







