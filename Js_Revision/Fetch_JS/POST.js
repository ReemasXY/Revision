
let options={
    method: "POST",
    headers:{
        "Content-type" : "application/json"
    },

    //body must be a string or (formdata/ url khasai use bhako dekhexaina)
    body :JSON.stringify({ // js objects lai directly server ya fetch ma pathauna mildaina so we need to use stringify to convert js object into the string(json)
         title :"sam",
         userId : "1"
    })
};

const postfunc= async ()=>{
    const req= fetch("https://jsonplaceholder.typicode.com/posts",options);
    const res= await req;
    const data = await res.json();
    console.log(data);
}
postfunc();