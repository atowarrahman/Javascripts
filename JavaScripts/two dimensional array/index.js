//2D array 

/*
function highestRunScorer(playersInfo){
// document.write(playersInfo + "</br>");
var highestScorer = playersInfo[0] [0];
var highestScorer=playersInfo[0] [1];

for (var i=1; i<playersInfo.length; i++){


if(highestScorer < playersInfo[i][1]){

    highestScorer = playersInfo [i] [1];

    highestScorer = playersInfo [i] [0];

}

}
return highestScorer;
}
var playersInfo=[
    [" atowar ",150 ],
  
    //[" Emon ", 100 ],
    //[" Tina  ", 50 ],
    [" taieba ", 102 ],
    [" sadia ", 153 ],
    [" soikat ", 143 ],

];

var names =highestRunScorer(playersInfo);
document.write(names);

*/

var ary =[
 ["atowar",23,"Male","CSE"],
 ["Rahman",24,"Male","CSE"],
 ["emon",29,"Male","CSE"],
 ["taieba",23,"FeMale","CSE"]
];

document.write("<table border='1px' cellspacing='0' > ");
for (var i=0 ; i<ary.length; i++){
    
document.write("<tr > ");

    for(var x=0; x<ary.length;x++){
        document.write("<td>"+ary[i][x] +" </td>  ");
    }


    document.write(" </br>");

    document.write("</tr > ");
}

document.write("</table > ");