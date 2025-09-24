//await only works for promise and async function
//async also returns a promise 

let test = async()=> {
  await setTimeout(() => console.log("Done!"), 1000); //await doesn't work here
  console.log("After await"); 
  return 9;
}

test().then((e)=>{
    console.log(e);
});
