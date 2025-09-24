// .then ma manually promise return garyo bhane matra resolve huna garna lai wait garxa natra hunna

//.then() itself doesn’t “wait” (it returns immediately with a new pending promise), but the promise it returns will only settle after the value you return inside the callback settles.    

let pro = new Promise((res, rej) => {
    setTimeout(() => {
        res("This is a first promise");
    }, 2000);
});

pro.then((result) => {
    console.log(result);
    setTimeout(() => {
        return "This is .then promise"
    }, 3000);
}).then((e) => {
    console.log(e); // 3 sec paxi audaina sidda undefined auxa
})


pro.then((result) => {
    let p2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("This is .then promise after 3 sec");
        }, 3000);
    })
    return p2;
}).then((e) => {
    console.log(e); // 3 sec paxi audaina sidda undefined auxa
})