const p=document.querySelector("p");
const text=p.innerText;

const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

//characters.split("")[Math.floor(Math.random()*50)];
let iteration=0;
function RandomText(){

    const str=text.split("").map((char,index)=>{
        if(index<iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random()*52)];
    }).join("")

    p.innerText=str;
    iteration+=0.5;
}
setInterval(RandomText,100)