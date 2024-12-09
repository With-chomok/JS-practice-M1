// function add(p,q){
//     return p + q
// }

// let habluMama = add ( "founder", "co founder");
// console.log(habluMama)




// function add (dipol,eshad){
//     return dipol + eshad
// }

// let gabluMama = add ("founder" , " " , "officer");

// console.log(gabluMama)


//function are first class citizen


// function get (a,b){
//     return a + b

// }



// let x = 5; 
// do { 
//     console.log("Hello"); 
//     x--; 
// } while (!x > 0);




function myName(p1, p2) {
    return p1 * p2;
}
let habluMama = myName(3, 7);
console.log(habluMama)



// function myList(dipol, chomok) {
//     return dipol + chomok;
// }
// let add = (boss ," " ,ceo);
// console.log(add)



// function as a paramire

// function sum(a, b) {
//     return a + b;
// }

// let total = sum;

// function count(a, b, fun){
// return fun (a ,b) * 5;
// }

// let result = count(2, 4, total);



// function add(a, b){
//     return a + b;
// }

// let sum = add;

// function average(a, b, fn) {
//     return fn(a, b) * 4;
// }
// let result = average(10 , 20 ,sum);
// console.log(result);

// Pass-by-value of primitives values

// function gablu(a) {
//     a = a * a;
//     return a;
// }
// let b = 10;
// let result = gablu(b);

// console.log(result);

// function dipol(a) {
//     a = a * a;
//     return a ;

// }

// let b = 30;
// let result = dipol(b);

// console.log(result)

// // Pass-by-value of reference values
// let person = {
//     nam: "dipol",
//     age: 20,
// };

// function increaseAge(obj) {
//     obj.age += 2;
// };

// increaseAge(person);
// console.log(person);

// let per ={
//     fname:"dipu",
//     serial: 54,
// };
// function increaseSerial(obj) {
//     obj.serial += 2;
// }
// increaseSerial(per);
// console.log(per);


// Home » JavaScript Tutorial » JavaScript Recursive Function

// // JavaScript Recursive Function
// function Hello (number) {
//     if(number === 0) return ;
//     console.log(number)
//     Hello(number - 1)
// }


// Hello(10)

// // function Hello

// function unknown (number){
//     if (number === 0) return;
//     console.log(number);
//     unknown(number - 1);
    
    
// }

// unknown(20)


// // dafault paramiter/

// function hablu(a="dipol"){
//     console.log(a)
// }
// hablu("chomok")

function add( x, y){
    return x + y;
}
console.log(100,200);
