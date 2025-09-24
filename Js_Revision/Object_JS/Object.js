let obj = {
    name: "Sameer",
    "roll no": 12, // key ma space xa bhane "" parxa natra pardaina
    work:  (hobby)=> {
      
        return `My hobby is ${hobby}`;
    },
    nestedobj: {
        family: "Maharjan family",
        wife: "Minisha Maharjan"
    },
    arr : [1,2,34,5,5,6]
}

console.log(obj.name);
console.log(obj["roll no"]);
console.log(obj.work("guitar"));
console.log(obj.nestedobj.wife);
console.log(obj.arr[0]);

console.log(obj["name"]);
console.log(obj["roll no"]);
// console.log(obj[work("guitar")]); // yesari garna mildaina 
// console.log(obj[nestedobj[wife]]);
// console.log(obj.arr[0]);


console.log(Object.keys(obj));//returns array of keys
console.log(Object.values(obj));//returns array of values