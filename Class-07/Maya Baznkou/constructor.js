'use strict'
 
let allCars=[];
//constructor:
function car(colorValue,typeValue,priceValue,isSoldValue){

    this.color =colorValue;
    this.type =typeValue;
    this.price = priceValue;
    this.isSold =isSoldValue;
    console.log(this)
    allCars.push(this)
}
//car01 object from the 
let car01 = new car("red","BMW",10000,false);
let car02 = new car("blue","BMW",30000,true);

// console.log(car01)
// console.log(car02)
// allCars.push(car01,car02)
console.log(allCars)