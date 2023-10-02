document.querySelector("button").addEventListener("click",myFunction);

function myFunction(){
    alert("My name is atowar ");
}

var myVar=document.querySelector("h1");
 myVar.addEventListener("click",function(){
 alert("Miss My country");
});

var myVar=document.querySelector("h1");
myVar.addEventListener("mouseover",function(){
    myVar.classList.add("my-style");

   });

   myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("my-style");
    
   });