
/*
var number=Number(prompt("Enter a Number :"));

if(number>0){
    document.write("Positive </br>");
}

else {
    document.write("Negative </br>");
}

var a=Number(prompt("Enter a number : "));

var result = a>0 ? "positive" :"Negative";

document.write(result);




var a=Number(prompt("Enter a number : "));

var result = a>0 ? "positive" : a<0 ? "Negative ":"Zero";

document.write(result);

*/
//large number identify

var num1=Number(prompt("Enter a number : "));

var num2=Number(prompt("Enter a number : "));

var num3=Number(prompt("Enter a number : "));

var result = num1>num2 ? "Num1 Is learge" : num1>num3 ? "Num1 Is learge": num2>num1 ? "Num2 Is learge" : num2>num3 ? "Num2 Is learge" : "Num3 Is large";

document.write(result);

