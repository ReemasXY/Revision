// Array
//ARRAY IS MUTABLE
let arr=[1,"Sameer",false,1.232]; // diff data type ni support hanxa yesle

arr.push("array"); // last ma value add garxa
console.log(arr.pop());// last ko value dinxa hatauxa ni original array baata


arr.unshift("hehehehehe"); // first ma add gardinxa array ko

arr.shift();// first element lai hatauxa main array bata

delete arr[2]; // specific position bata element hatai dinxa but tyo array ma empty bhanera auxa, huna hai hunxa array ma tara print garda dekhdaina


let new_arr= arr.concat([2,2,4,5],[3,4,5,3]); //yesle naya array return garxa original ma no change

new_arr.sort();// basically sort gardinxa original array ma 


console.log(new_arr);
console.log(arr[2]);
arr.forEach((value)=>{
console.log(value);
});



let num= [1,2,3,4,5];

//  syntax
// array.splice(start, deleteCount, item1, item2, ...)

// num.splice(1,3); // splice(start index, number of elements to delete)
// console.log(num);

num.splice(1,3,2313,3424); // this can also be used to add the elements in the array
// 1 index bata 3 ta element remove ani tyo bakiko element rakhdinxa yesle

console.log(num); 


// slice ta same as string
num.slice(1); // creates a new array doesn't change the original array
console.log(num);
