//do-while loop
var i=1;
while(i<=10){
    document.write(i+"</br>");
    i=i+1;

}
document.write("##################### </br>");

var i=1;
do {
  
    document.write(i+"</br>");
    i=i+2;

}while(i<5);

//break 

for(var x = 1; x<= 50 ; x++) {

    document.write( " "+x);

    if(x == 10) {
        break;
    }
    
  
}
document.write( "</br> End");


for(var x = 1; x<= 50 ; x++) {

   

    if(x %2== 0 ) {
        continue;
    }
    document.write( " "+x);
  
}
document.write( "</br> End");



