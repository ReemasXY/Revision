
//Promises are asynchronous in nature 
// to access what the promise is returning (resolve) we need .then()
// Promise also returns promise
// .then also returns a promise by default



let prom= new Promise ((resolve,reject)=>{
    // console.log("I am inside the promise");
resolve("SAmeer is my name");
});
prom.then((e)=>{
    console.log(e);//3rd 
})
console.log("hello welcome to promise");// 1st 
console.log("This is another line");// 2nd 



let pro1= new Promise((resolve,rej)=>{
    console.log("This is promise 1");
    resolve(1);
})


let pro2= new Promise((resolve,rej)=>{
    console.log("This is promise 2");
    resolve(2);
})

pro1.then((result)=>{
    console.log(result);
})


pro2.then((result)=>{
    console.log(result);
})