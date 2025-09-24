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

for( const key in obj)
{
    console.log(key,obj[key]);//key dinxa yesle
    // console.log(obj.key); // yesari mildaina 

}