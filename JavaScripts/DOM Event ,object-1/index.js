//change event 

const input= document.querySelector("input[name=name] ");
input.addEventListener("change", changeHandler);



function changeHandler(event){
 document.write("Changed");
 document.write(event.type);
document.write(event.target);

document.write(event.target.className);
document.write(event.target.id);
document.write(event.target.value);

}

const varName= document.querySelectorAll("input[name=program]");

Array.from(varName).map((program)=> {
    program.addEventListener("change",programHandler);
})

function programHandler(e){
    if(e.target.checked){
        document.write(e.target.value);
    }

}


const deptName = document.querySelector("#department");
deptName.addEventListener('change',deptHandler);


function deptHandler(e){
 //document.write("selectetd")
 document.write(e.target.value);

}

