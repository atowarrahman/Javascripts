// var studentList =document.querySelector(".student-list");
// var StudentA=document.querySelector(".student-a");
// document.write(StudentA);

//image slider 

var photos =["images/1.jpeg" ,"images/2.jpeg ","images/3.jpeg ","images/4.jpeg"];

var imgTag=  document.querySelector("img");

count =0;

function next(){

    count++;

    if(count>=photos.length){
     count=0;
     imgTag.src=photos[count];
    }
    else {
     imgTag.src=photos[count];
    }
    imgTag.src=photos[count];
 
}
function prev(){
    count--;

   if(count <0 ){
    count=photos.length-1;
    
    imgTag.src=photos[count];
   }
   else {
    imgTag.src=photos[count];
   }
   imgTag.src=photos[count];

   
}