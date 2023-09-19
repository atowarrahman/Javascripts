for (var i=1 ; i<=10; i=i+1){
    document.write(i+" Atowar Rahman </br>");
}

var sum =0;
var m=parseInt(prompt("Enter the starting Number :"));
var n=parseInt(prompt("Enter the End Number :"));
var x;

for (x=m ; x<=n ; x=x+1){
    sum= sum +x;
   
}
document.write(sum+"</br>");

var a=1;
sum=0;

while (a <=10){
    sum=sum+a;
    a=a+1;   

}
document.write( sum+"</br>");

var b=1;
sum=0;

while(b<=100){
 
    if(b%3==0 && b%5==0){

        document.write(b+"</br>");
        sum =sum+b;

    }
    b=b+1;

}

document.write("</br>"+sum);



