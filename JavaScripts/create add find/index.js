var link =document.getElementsByTagName("a")[0];

link.innerHTML = "Study with emon" ;

link.style.textDecoration="none ";
link.style.color="Red";
link.style.fontSize="100px";
link.href="https://www.google.com";


var h1=document.getElementsByTagName("h1")[0];
h1.innerHTML="Say Hello World ";

//creating html element

var heading2=document.createElement("h1");

var text = document.createTextNode("This is heading 2");
heading2.appendChild(text) ;

var myDiv= document.getElementById("my-div");
myDiv.appendChild(heading2);

//remove tag

var heading3=document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading3);

//upper side add element
var heading4=document.createElement("h1");

var text4 = document.createTextNode("This is heading add upper side ");
heading4.appendChild(text4) ;



//var heading5=document.getElementsByTagName("h1")[0];

//var myDiv= document.getElementById("my-div");
  myDiv.insertBefore(heading4,h1);

  var newHeading=document.createElement("h3");
  var newText=document.createTextNode("New line add");
  newHeading.style.color="black";
  newHeading.style.backgroundColor="red";
  //newText.style.color="blue";
  newHeading.appendChild(newText);
  var myDiv= document.getElementById("my-div");
  
  myDiv.insertBefore(newHeading,h1);
  

