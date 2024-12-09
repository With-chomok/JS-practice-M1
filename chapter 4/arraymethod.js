const myInfo = ["Banana", "apple", "Mango", "Orange","jackfruits"];
console.log(myInfo.length)
// array to string

const MyInfo = ["Dipol","01234", "netrakonma"];
console.log(typeof MyInfo.toString())

console.log(MyInfo.at(0))
console.log(MyInfo.join("#"))
delete MyInfo[0]


console.log(MyInfo)



const array1 =[1,2,3,4,5];
const array2 =[6,7,8,9];

let info = array1.concat(array2);
console.log(info)


const flatingarray = [[1,2],[2,3],[3,4],[4,5],[5,6]];
console.log(flatingarray.flat())

const flatarray = [[1,2],[3,4],[5,6],[7,8],[9,10]];
console.log(flatarray.flat())




const array3 =[1,2,3,4,5];

const newarray= array3.toSpliced(1,3);
console.log(array3)
console.log(newarray)


const array4 = [1,2,3,4,5,6,7,8,9,];
const newarray4 = array4.toSpliced(0,5);
console.log(array4)
console.log(newarray4)
