var numOfWon =0;
var numOfLost =0;

for(var i=1; i<=5; i++){
    var guessNumber =parseInt(prompt("Enter A number from 1 to 5 :"));

    var randomNumber =Math.floor( Math.random()*5) +1 ;
    
    if (guessNumber==randomNumber){
        document.write("You Have won </br>");
        numOfWon++;
    }
    
    else{
        document.write("You Have Lost . Random Number Was "+ randomNumber+"</br>");
        numOfLost++;
    }
}

document.write(" *********************************** </br> " );

document.write(" Total Number Of Won :" +numOfWon +"</br> " );

document.write(" Total Number Of Won :" +numOfLost +"</br> " );


