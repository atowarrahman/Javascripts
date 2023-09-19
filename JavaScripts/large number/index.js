var num1 =parseFloat(prompt("Enter Num1"));
var num2 =parseFloat(prompt("Enter num2"));
var num3 =parseFloat(prompt("Enter Num3"));

if(num1>num2 && num1>num3)
document.write("Learge Number is ="+num1);

else if(num2>num1 && num2>num3)
document.write("Learge Number is ="+num2);

else 
document.write("Learge Number is ="+num3);

var letter=prompt("Enter Letter ");

letter = letter.toLowerCase();


if(letter =="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
document.write("</br> Vowel ");

else
document.write("</br> Consonant");
