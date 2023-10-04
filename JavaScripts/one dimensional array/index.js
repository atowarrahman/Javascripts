var names=["Atowar", "Rahman","Emon"];

//document.write(names[0]);

for( var i=0; i<3; i++){

    document.write(names[i]+"</br>");
}

//task 8

var scores1=[21,28,1,43,55];


function highestScore(){

    document.write(scores1+"</br>");

    var max =scores1[0];

    for(var x=1 ;x<scores1.length ; x++ ){

        if(max<scores1[x]){
            max=scores1[x];
        }

    }
return max;
  

}
var maxScore=highestScore(scores1);
document.write(maxScore);

//document.write(highestScore(a));

