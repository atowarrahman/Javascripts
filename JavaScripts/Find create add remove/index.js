var link =document.getElementsByTagName("a")[0];
//document.write(link);

link.innerHTML="Study with Emon";

link.style.textDecoration="none";
link.style.color="red";
link.style.fontSize="17px";
link.href= " https://www.google.com " ;
document.write(link);

var heading1=document.getElementsByTagName("h1")[1];
heading1.innerHTML="Hello World By Everyone";
document.write(heading1);


// creating html element 

var heading2=document.createElement("h2");
var text=document.createTextNode("Thi is html element");

heading2.appendChild(text);



var myDiv=document.getElementById("my-div");
myDiv.appendChild(heading2);
