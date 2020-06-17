//Promise
text = "";
ps = [];

for(let i = 0; i < 3; i++){

    const p = new Promise((resolve, reject) =>  {
        setTimeout(()=>{
            text += "new" + i;
            resolve();          
        }, 3000);
    });

    ps.push(p);
}

    
Promise.all(ps).then(() => console.log(text));
