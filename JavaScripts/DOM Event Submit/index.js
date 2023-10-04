//finding the elements

const form=document.querySelector("form");
const name=form.querySelector("div #name");
const email=form.querySelector("div #email");
const password=form.querySelector("div #password");

form.addEventListener('submit',formHandler);



function formHandler(e){
    e.preventDefault();
   // document.write("submit");
    
    const UserInfo={
        name :name.value,
        email :email.value,
        password: password.value
    };

    document.write(UserInfo);


}



//const form=document.querySelector('form');
//const form=document.querySelector('form');
