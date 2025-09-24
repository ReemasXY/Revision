const arr=[1,2,3,4,5];
let arr1=arr.filter((value,index)=>{
    
    // console.log(index);
    if(value> 3){
        return true // return value ni same kura
    };
});
arr1.forEach((value)=>{
    console.log(value);
})
// const numbers = [1, 2, 3, 4, 5];

// // Filter even numbers
// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4]
// console.log(typeof evens); // "object"
// console.log(Array.isArray(evens)); // true

