// // let person = "dipol",
// //       hence = "hablu",
// //       she = "programmer"

// //       console.log(she);
      

// // variable decalre

// // let hablu = true;
// // console.log(typeof hablu);

// //  let x = "5";
// //  let y = 5;
// //  let z = x + y;

// // console.log( z);


// // object declare/

// const person = {
//       carNAme: "mersceties",
//       carNumber :3476,
//       carMade :  "true",
//       carPosition: "first number"

// }

// // change value/
// person.carNAme = "corola"
// person.carNumber =2345564555555554444
// // added new valeu/
// person.carSystem = "oprating";
// person.myCar = true;


// // delete proparty/
// delete person.carSystem;
// delete person.myCar;

// // access proparty valeu/

// console.log(person.carNAme);


// let  firstName = "dipol";
// let     lastname = "das";



// const fullNAMe= firstName + " " + lastname;
// console.log(fullNAMe);



// // operators


// // arithmetic operators
// let x = 2 ;
// let y = 4;
// let z = x + y ;
// console.log(typeof z);

// let sum;
// console.log(typeof sum);


// let price = "car" ,deliveryCharge = "micro";
// totalPrice = price + " " + deliveryCharge;
// console.log(totalPrice);

// // reminder operators

// let devide = 6 % 4;
// // console.log(devide);

// // comparision operators/

// let a = 60;
// let b = 64;
// ++b;
// console.log(b);

// console.log(a > b);
// console.log(a<b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);


// // logical operatos/

// // not operators/
// let eligible = true;
// console.log(eligible);

// let elig = true;
// let unelig = false;
// console.log(elig || unelig);






// // chapter 3 connect with html page/
// // reserbed words/

// let text = "i am dipol das chomok, i am learn with hablu programmer";
// console.log(text.charAt(7));

// let text1 = "dipol";
// let text2 = "das";

// console.log(text1.concat(" " + text2));


// // indexof

// let text3 = "adk fo eo ie rh kj f we oi r fjha sdf iow eru we jkh sd j fh";

// console.log(text3.indexOf("fo"));


// // length is a proparty/
// console.log(text3.length);

// let hablu = "please repeat me"

// console.log(hablu.repeat(3));

// let tex = "He am coming from suganda"
// console.log(tex);

// console.log(tex.replace("suganda", "Uganda"));


// // variable to string/

// let num = "1000";
// console.log(parseInt(num));

// let number = "7865.987";
// console.log(parseInt(number));


// arrey declare
const cars = ["dipol" , "das"];

let info = cars.at(1);
// console.log(info);
// info.join(" #");
// concat mthod
const myLife = [ "dipol ", "das", "chomok" , "ghablu", "programmer"];
const myLife2 = ["this "," my life"];
// console.log(myLife.concat(myLife2));



// flat method/
let myLife3 = ["dipol", "das", "chomok", "hablu", "programmer", "this", "is", "my", "life"];
let myLife4 = myLife3.flat(2);
// console.log(myLife4);

// flat method

const myRoll = [[1,2], [3,4],[5,6],[7,8],[9,10]];
const myRoll1 = myRoll.flat(2);
console.log(
    myRoll1
);


//length method

const fruits = ["apple ", "banana", "mango" , "orange " ,"apple ", "banana", "mango" , "orange "  ,"banana", "mango" , "orange " ,"apple ", "banana", "mango" , "orange "];
console.log(fruits.length);

// join method
const mfruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(mfruits.join(" $ "));

// pop methodd

const fruits2 = [ "mango", "apple ", "bana", "orange", "guava"];
let frut = (fruits2.pop());
console.log(
    frut
);
console.log(fruits2);