var number=5;

var result=number*number;

document.write(" "+result+"</br>");

function sqaure(number){

    // var number=5;

    var result=number*number;

    document.write("Result = "+result+"</br>");

}
sqaure(5);

function sq(num1,num2){

    // var number=5;

    var result1=num1*num2;

    document.write("Result = "+result1+"</br>");

}
sq(9,9);

function sq1(num1,num2){

    // var number=5;

    var result2=num1*num2;

    return result2;

}
document.write("Result = "+sq1(10,9));

// add function
function add(a,b){
    var sum=a+b;
    document.write("  Result = "+sum);
}

// sub function
function sub(c,d){
    var sub=c-d;
    document.write("  Result = "+sub);
}

add(10,10);
sub(10,10);