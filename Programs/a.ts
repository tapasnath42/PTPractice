//  

let str = "d!e@l#l$o%i^te";
let splchars = new Map();
let chars = [];

for(let i=0; i<str.length;i++){
    if(!(/[a-z]/.test(str[i]))){
        splchars.set(i, str[i]);
    }else{
        chars.push(str[i]);
    }
}

let revarr = chars.reverse();

//console.log(splchars);
//console.log(chars.reverse());

for(let [key, value] of splchars){
    revarr.splice(key, 0, value);
}

console.log(revarr.join(""));

