// IIFEs -immediately invokeable function expressions

(function display(text){
    document.write(text);
})("Kill You </br> ");

(function add(a,b){
    var sum=a+b;
    document.write("  Sum "+sum);
})(10,10);