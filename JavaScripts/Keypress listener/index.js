
var count =0;


document.querySelector("textarea").addEventListener("keypress",function(event){
   
   count++;

    var text=event.key;
   document.querySelector("p").innerHTML= "you have pressed  " +count ;

});







//===============================================


// for(var i=0 ; i<3 ; i++){

//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//     var text= this.innerHTML;
//     audioPlay(text);
//     playAnimation(text);

//     });
// }


// document.addEventListener("keypress" , function(event){
//     var text = event.key;
//     audioPlay(text);
//     playAnimation(text);
// });




// function audioPlay(text){
//     switch(text){
//         case "a":
//             var audio =new Audio("sounds/a.mp3");
//             audio.play();
//             break;
//             case "b":
//                 var audio =new Audio("sounds/a.mp3");
//                 audio.play();
//                 break;
            
//                 case "c":
//                     var audio =new Audio("sounds/a.mp3");
//                     audio.play();
//                     break;

//     }
// }

// function playAnimation(text){
//     var selectetdButton=document.querySelector("."+text);
//     selectetdButton.classList.add("anim")

//     setTimeout(function(){
//         selectetdButton.classList.remove("anim");

//     } , 1000 );

// }

