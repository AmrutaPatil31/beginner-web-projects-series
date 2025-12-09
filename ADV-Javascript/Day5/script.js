//promise

const prm=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve();
    }, 3000);
});

prm
    .then(function(){
        console.log("resolved");
        
    })
    .catch(function(){
        console.log("rejected");
        
    })

//fetch

fetch(`https://randomuser.me/api/`)
.then(function(notReadableData){
    return notReadableData.json();
})
.then(function(asliData){
    console.log(asliData);
    
});

//fetch se kisi bhi url par jaa sakte hain

fetch(`https://randomuser.me/api/`)
.then((raw)=>raw.json())
.then((data)=>{
    console.log(data.results[0].name.first);
    
});

//async await

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num=Math.floor(Math.random()*10);
            if(num<5){
                resolve(true);
            }else{
                reject(false);
            }
        }, 1000);
    });
}

async function abcd(){
    let v=await getNum();
    console.log(v);
    
}
abcd();