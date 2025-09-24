let a="Sameer";

//STRINGS ARE IMMUTABLEEEE CHANGE HUDAINA ORIGINAL STRING MA TESKO SATTA NAYA STRING NAI BANXA  


console.log(a[0]);//first character dinxa
console.log(a[a.length-1]);//last character dinza


//length
console.log(a.length);

//template literals (IMPORTANT)
console.log("My name is "+ a);// yo plus garna hectic hunxa so use backtick ``;
console.log(`My name is ${a}`);//${a} lai string interpolation bhanxa
// both are correct but 2nd is more easier 

//" " and '' are also possible inside the backtick

// console.log("My name is "Sameer" "); error 
console.log(`My name is "${a}" and he studies is grade '12' `);

console.log("Sam'eer"); //Double quote ko bhitra single quote rakhna milxa
console.log('Sam"eer');// Single quote ko bhitra double quote rakha milxa


//ESCAPE SEQUENCE 
// aru thau ma padeko jasto ho /n /t /" 
// /" le chai aba quote rakhna dinxa simple as that

console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.length);
console.log(a.slice(2));// this would be used most often 
console.log(a.slice(2,5));//2 included 5 not included 
console.log(a.charAt(2));// a[2] gare jasto ho


let b= "samsamsam";
console.log(b.replace("sam","123")); // only first occurence will be replaced 
console.log(b.replaceAll("sam","123")); // sab occurences will be replaced 

console.log(a.concat(b));
console.log(a.concat(b,"Raj","Sid","min"));// milxa majale

let c = "    S         a          m  e        ee r         ";
console.log(c.trim()); // first ra last ko space lai matra remove hanxa

let d= "apple banana mango";
console.log(d.split("a")); 


let e="Sameer";
let f= "Simeer";
console.log(e.startsWith("Sa"));//true
console.log(f.startsWith("Sa"));//false