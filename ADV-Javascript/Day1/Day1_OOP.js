 class Human {
            constructor() {
                this.drink = document.querySelector("input[name='drink']");
                this.food  = document.querySelector("input[name='food']");
                this.car   = document.querySelector("input[name='car']");
            }
 }

Human.prototype.eat = function () {
    console.log("I have tried the sip of " + this.drink.value);
    console.log("I have tried the food " + this.food.value);
};

Human.prototype.Bought=function(){
    console.log("i have bought "+this.car.value);
    console.log("i have bought a bunglow at juhu ");
};

let human1=new Human();

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    human1.eat();
human1.Bought();
});
