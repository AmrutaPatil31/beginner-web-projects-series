//object
let obj={
    name:"Amruta",
    age:21,
    mail:"example@gmail.com",
    phone:12345
};

//this keyword
class Animal{
    constructor(){
        this.food="catfood";
        this.toy="ball";
        this.seafood="fish"
    }
}

Animal.prototype.play=function(){
    console.log("playing with"+ this.toy);
}

new Animal();

//Global->window
console.log(this);

//function()->window
let obj1=function(){
    console.log(this);  //window
}
obj1();

//es5 function inside object->object
let obj2={
    fnc:()=>{
        console.log(this);
        
    },
}
obj2.fnc();

//es6 function inside object

let obj3={
    fnc1:function(){
        function abcd(){
            console.log(this);
            
        }
        abcd();
    },
}
obj3.fnc1();

//call,bind,apply

//call
let Obj={
    name:"Amruta"
}
function abcd(){
    console.log(this);
}
abcd.call(Obj);

//apply
let Obj2={
    name:"Ammy"
}
function abcd2(a,b,c){
    console.log(this,a,b,c);
}
abcd2.call(Obj2,[1,2,34]);

//bind-> used to create new function

let Obj3={
    name:"Amu"
}
function abcd(){
    console.log(this);
}
abcd.call(Obj3);