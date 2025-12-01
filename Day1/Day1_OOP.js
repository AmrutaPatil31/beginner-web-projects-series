class Human{
    constructor(){
        this.drink="coffee";
        this.food="dhokla";
        this.car="BMW";
    }
}
Human.prototype.eat=function(){
    console.log("i have tried the sip of "+drink);
    console.log("i have tried the food "+ food);
}
Human.prototype.Bought=function(){
    console.log("i have tried the sip of "+drink);
    console.log("i have tried the food "+ food);
}

let human1=new Human();