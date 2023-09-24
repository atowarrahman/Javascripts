names ="Atowar";
age=23;
var cgpa=3.92;
var lang =["bangla","hindi"];

document.write(age+ "</br>");
var student1 ={
    name : "atowar" ,
    age :23,
    cgpa :3.92 ,
    lang :["bangla","hindi"]
}
document.write(student1.name+ "</br>");

//constractor 

function Student(name,age,cgpa,lang)
{
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display=function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);

    }

}

var student2=new Student("Tina",24,3.50,["English","bangla"])

document.write(student2.lang + "</br>" );

student2.display();