var name1,name2,name3,name4,name5;
name1="Atowar";
name2="rahman";
name3="Emon";


var names =new Array(10);

names[0]="Atowar";
names[1]="Rahman";
names[2]="Emon";
names[3]="Atowar";
names[4]="Atowar";

document.write(names[0]);

document.write("  </br> "+names);

document.write("  </br> "+names.length+"  </br> ");

var num=[1,2,3,4,5,5];

document.write(num+"  </br> ");

document.write(num[5]+"  </br> ");

num.push(99);

document.write(num+"  </br> ");

num.pop();

document.write(num+"  </br> ");

//array concat 

var a=["a","b"];
var b=["c","d"];

var c=a.concat(b);

document.write(c+"  </br> ");

//array loop.

document.write(" ############################# </br>");

var number=[10,20,30,40,50];

document.write(number[0]+"  </br> ");

document.write(number[1]+"  </br> ");

document.write(number[2]+"  </br> ");

document.write(number[3]+"  </br> ");

document.write(number[4]+"  </br> ");


document.write(" ############################# </br>");

for( var i=0; i<5; i=i+1){
    document.write(number[i]+"  </br> ");
}


document.write(" ############################# </br>");

sum=0;

for( var i=0; i<5; i=i+1){
    document.write(number[i]+"  </br> ");
    sum=sum+number[i];
}

document.write("Sum = "+sum +"  </br> " );

/*
var arr=new Array();
var sum=0;

for (var i=0; i<5;i++){
    arr[i]=parseInt(prompt("Enter a number :"));
    sum=sum+arr[i];
}

document.write("Sum = "+sum +"  </br> ");

*/

document.write(" ############################# </br>");

var names=["atowar","emon","tina","sadia"];

document.write(names +"  </br> ");

//opposite of pop
names.shift();
document.write(names +"  </br> ");

//opposite of push but add first index number 
names.unshift("Pushon");
document.write(names +"  </br> ");

document.write(" ############################# </br>");
//splice(kon index a value boshabo , kotota remove korbo last theke, valu add korbo)
names.splice(2,0,"korim","rohim");
document.write(names +"  </br> ");
document.write(" ############################# </br>");
// remove value use splice 
names.splice(1,2);
document.write(names +"  </br> ");

//slice
document.write(" ############################# </br>");
var newArray=names.slice(1);
document.write(newArray +"  </br> ");


document.write(" ############################# </br>");
// sorting name 
names.sort();
document.write(names +"  </br> ");

document.write(" ############################# </br>");

names.reverse();
document.write(names +"  </br> ");
