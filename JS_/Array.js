// Array are muteable and Array can be change
// String are muteable and String can be not change

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);
// console.log(a[8]);

// console.log(a[9]); // this is a value is undifinde
// // Array print
// console.log(a);
// // Array print  and change the value
// console.log((a[0] = 23));
// // measure the Array length
// console.log(a.length);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// ==============================Method=================================

// ===================toString=================== 
// let b = a.toString(); // b is string
// console.log(b);

// ===================join===================
// let c = a.join(" and "); // c is formating the array with a ("...")
// console.log(c);

// ===================pop===================
// a.pop(); // to remove the least value in a array
// console.log(a);

// ===================poush===================
// let d = a.poush(); // the least remove value is a return in array 
// console.log(a, d);

// ===================shift===================
// let e = a.shift(); // remove the first value in array retuen the new array length 
// console.log(e, a);

// ===================unshift===================
// let f = a.unshift(); //add the first value in array and retuen the new array length 
// console.log(f ,a);

// ===================delete===================
// console.log(a.length);
// delete a[0] // delete a index value [0] without changing th length
// console.log(a.length);

// ===================concat===================
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [111, 121, 113, 114, 115, 116, 117, 118, 119]
let c = [212, 222, 223, 224, 225, 262, 227,228, 229]

// var newArray = a.concat(b,c) // add the array without changing [a,b,c] array in newarray array
// console.log(newArray);

// ===================sort===================

// let compare = (a, b)=>{
//   // return b - a  // sort in resending value 
//   return a - b // sort in resending value 
// }
var a = [1, 5322, 3, 544, 5, 46, 7, 58, 9563];
// a.sort(); // sort the array in alpha beticaly EX:[1,2,3,3,4,4,5,6,7,8,9,9]
// console.log(a);

// a.sort(compare) // sort in resending value 
// console.log(a);

// ===================reverse===================
var a = [1, 5322, 3, 544, 5, 46, 7, 58, 9563];
// a.reverse()
// console.log(a);

// ===================slice===================
var a = [1, 5322, 3, 544, 5, 46, 7, 58, 9563];


// ===================splice===================
var a = [1, 5322, 3, 544, 5, 46, 7, 58, 9563];


// =================== ===================
