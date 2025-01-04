("use strict");

// let person = "dipol",
//       hence = "hablu",
//       she = "programmer"

//       console.log(she);
      

// // variable decalre

// let hablu = true;
// console.log(typeof hablu);

//  let x = "5";
//  let y = 5;
//  let z = x + y;

// console.log( z);


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


// // arrey declare
// const cars = ["dipol" , "das"];

// let info = cars.at(1);
// // console.log(info);
// // info.join(" #");
// // concat mthod
// const myLife = [ "dipol ", "das", "chomok" , "ghablu", "programmer"];
// const myLife2 = ["this "," my life"];
// // console.log(myLife.concat(myLife2));



// // flat method/
// let myLife3 = ["dipol", "das", "chomok", "hablu", "programmer", "this", "is", "my", "life"];
// let myLife4 = myLife3.flat(2);
// // console.log(myLife4);

// // flat method

// const myRoll = [[1,2], [3,4],[5,6],[7,8],[9,10]];
// const myRoll1 = myRoll.flat(2);
// console.log(
//     myRoll1
// );


// //length method

// const fruits = ["apple ", "banana", "mango" , "orange " ,"apple ", "banana", "mango" , "orange "  ,"banana", "mango" , "orange " ,"apple ", "banana", "mango" , "orange "];
// console.log(fruits.length);

// // join method
// const mfruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(mfruits.join(" $ "));

// // pop methodd

// const fruits2 = [ "mango", "apple ", "bana", "orange", "guava"];
// let frut = (fruits2.pop());
// console.log(
//     frut
// );
// console.log(fruits2);


// // splice method/
// const array1 = [ "mango", "apple ", "bana", "orange", "guava"];
// console.log(array1.splice(0,3));





// const splicee = [ "dipol", "chomok", "shaym", "nittynanda", "gourkumar", "sukal"];
// console.log(splicee.splice(0,5));

// spliced methodd
// const spli = [ "dipol", "chomok", "shaym", "nittynanda", "gourkumar", "sukal"];
// console.log(spli.spilced(1,4));





// let myDate = new Date(3/4/25)
// console.log(myDate);

// const coverCeil= ["sdf", "asfd", "asdf", "asdf", "ert", "dfhg", "db"]
// let ceil = Math.ceil(1,2,3,4,5,6,7)
// console.log(ceil);

// const d = new Date();
// console.log(d);

// const da =new Date("2024,01,25, 11:23:43");
// console.log(da);
// const d = new Date("2018, 11, 12, 11, 14, 12");
// console.log(d.getFullYear());


// const myDate = new Date();

// let  curretdate = myDate.getFullYear();
// let  curretday = myDate.getDay();
// let currentMonth = myDate.getMonth();
// let currenTime = myDate.getTime();
// console.log(curretdate);
// console.log(curretday);
// console.log(currentMonth);
// console.log(currenTime);

// let currentMenuit = myDate.getMinutes();
// console.log(currentMenuit);

// let currenSecond = myDate.getSeconds();
// console.log(currenSecond);
// let currentHour = myDate.getHours();

// console.log(currentHour);

// let currenSecondset =  myDate.setSeconds(23);
// console.log(currenSecondset);

// let currentHourset = myDate.setHours(4);
// console.log(currenSecondset);


// let ceil = Math.ceil(4.5);
// console.log(ceil);
// let round = Math.round(7.7);

// console.log(round);
// let floor = Math.floor(3.9);
// console.log(floor);
// let random = Math.random(6);
// console.log(random);
// let trunc = Math.trunc(9.1);
// console.log(trunc);


// // first class citizen
// function sum(a, b) {
//     return a + b;

// }
// let add = sum(8, 2);
// console.log(add);

// function added (x, y) {
//     return x + y;

// }
// let adds = sum;
// console.log(adds(8, 5));

// function sub(a, b) {
//     return a - b;
// }
// let subs = sub;
// console.log(subs(6, 3));


// let mul = function ( a, b ){
//     return a * b;
// }
// let muls = mul ( 6,6 );
// console.log(muls);

// // nested function

// function sajib(a) {
//     function dipol (b){
//         function chomok (c) {
//             console.log(a + b + c);
            
//         }
//         chomok(" chomok is the ceo of the  company \n" )

        
//     }
//     dipol(" dipol is the manager of the company \n")
    
// }

// sajib(" sajib is founder of the company \n")


// // pass by value and pass by reference
// function dipol  (a) {
//     return a = a * a
// }
 
// let a = 10;

// let chomok = dipol(a)
// console.log(chomok);

// // practice 2

// function dipol1 (b) {
//     return b = b + b;

// }

// let b = 10;

// let chomoks = dipol1(b);
// console.log(chomoks);
// pass by reference

// Object declare

// const person = {
//     name : "dipol",
//     roll : 45643254,
//     adress : "mymensingh",
//     age :45
// }

// function increaseValue(a){
//     a.age = a.age + 1;
// }
// increaseValue(person);
// console.log(typeof person);

// recursive function 

// function factorial (n) {
//     if (n == 0) {
//         return 1;
//     }
//     else {
//         return n * factorial (n - 1);

//     }


// }
// let result = factorial (3);
// console.log(result);

// recursive FunctionElement

// function dipol2 (n) {
//     if (n === 0) return 
//         console.log(n);
//         dipol2(n - 1);

        
//     }

// dipol2(10000);


