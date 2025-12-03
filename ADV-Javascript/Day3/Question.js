//SECTION 1: Objects ang OOPS Thinking (Foundation)

//1.Create a user object that stores name and email and has a login method which prints "user logged in"

let user={
    name:"Amruta",
    email:"example@gmail.com",
    login:function(){
        console.log("user logged in");
        
    },
};
user.login();

/*
2.Imagin you have 5 users
First,think how you would you manage them without using class.then convert the same logic
using a class and observe how the code becomes cleaner.write code for both approaches.
*/

//without class
let user1={
    name:"Sanika",
    email:"example1@gmail.com",
    login:function(){
        console.log("user logged in");
        
    },
};
let user2={
    name:"Sarika",
    email:"example2@gmail.com",
    login:function(){
        console.log("user logged in");
        
    },
};
let user3={
    name:"Sana",
    email:"example3@gmail.com",
    login:function(){
        console.log("user logged in");
        
    },
};
let user4={
    name:"Surya",
    email:"example4@gmail.com",
    login:function(){
        console.log("user logged in");
        
    },
};

let user5={
    name:"Sakshi",
    email:"example5@gmail.com",
    login:function(){
        console.log("user logged in");
        
    },
};
//with class
let User=class{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    login(){
        console.log("User logged in");
    }
    details(){
        console.log(this.name+" "+this.email);
        
    }
}
let u1=new User("Raj","raj@gmail.com");
u1.details();
u1.login();


//3.create a product object that stores name and price and has a method which returns the final price after discount

let product={
    name:"Amruta",
    price:1000,
    finalPrice:function(discount){
        return 1000-(1000*(discount/100));
    }

}
let fPrice=product.finalPrice(10);
console.log("final price after discount is: "+fPrice);

// Section 2: Classes and Objects

//answer this in your own words ,how would you write this logic and what problems might occur when the project becomes large

/*I would break the code into small functions, use clear variable names, and separate UI code from main logic. 
I’d also keep the project organized by splitting it into different files or modules.

Problems when the project becomes large:

The code can become hard to manage, debugging gets difficult, duplicate logic may appear, performance can slow down,
 and adding new features becomes harder if the structure isn’t clean. */

 //Section 3:Constructor and this keyword
 

