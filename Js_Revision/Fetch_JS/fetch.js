
// Fetch Api returns a promise 
// it is a 2 stage process status ra ok hence it requires two .then or await 
// fetch hanisake si it returns response which is a promise jasma sab info hunxa status,ok,hamro actual data and so on 
// to get our data hami response.json() garxam which inturn returns a promise so .then yesma ni pareko ho



const DataFetch= async()=>{
let request= fetch("https://dog.ceo/api/breeds/image/random");
const response = await request;
console.log(response.status);
console.log(response.ok);



const data = await response.json();
// reponse.json() response.text() yeuta matra rakhna pauxa duitai rakhna paudaina
// const data = await response.text(); yesto ni milxa, yesma chai chaldaina, 
let img = document.createElement("img");
img.src=data.message;
img.height=500;
img.width=500;
document.body.innerHTML= "";
document.body.appendChild(img);
console.log(data);

}

setInterval(() => {
    DataFetch();
}, 2000);
