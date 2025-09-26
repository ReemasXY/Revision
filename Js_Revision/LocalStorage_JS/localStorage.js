//local storage is similar to the cookie 
// browser restart garda ra page reload handai pani data persists 
// the diff in cookie and local storage is that server ma data request garda cookie jaile attach bhayera janxa but local storage ko data jadaina uta  
//baki ta data store garna use hunxa as key value pair

// both key and value is stored as Strings here
// tyo inspect ma application ma bhetinxa localStorage ko data

localStorage.setItem("name", "Sameer");// name=key Sameer=value
localStorage.setItem("class",12 );// name=key Sameer=value
console.log(localStorage.getItem("name")); // tyo key ma k value xa auxa
localStorage.removeItem("name");// removes the key and value 

localStorage.clear()// sab clear handinxa localStorage ko data


localStorage.setItem("name", "Sameer");// name=key Sameer=value
localStorage.setItem("class",12 );// name=key Sameer=value


console.log(localStorage.length);// total number of keys kati xa dinxa
console.log(localStorage.key(1));// as index ni access garna milxa
// console.log(localStorage.getItem(0)); yesari garna mildainas