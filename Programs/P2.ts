//1. Str = Deloitte2026 , print reverse order without altering numbers.
//2. input : "De@oi$$e20*6" // 60@2e$$ioe*D

let str = "De@oi$$e20*6";
 // 60@2e$$ioe*D
 // 60@2e$$ioe*D
const map = new Map();
const arr = [];

/*let arr = ["apple", "banana", "orange"];
arr.splice(1,0,"mango");
console.log(arr);*/

for(let i=0; i<str.length; i++){
    if(!(/[a-zA-Z0-9]/.test(str[i]))){
        map.set(i, str[i]);
    }else arr.push(str[i]);
}


console.log(map);
console.log(arr.reverse());

for(const [key, value] of map){
    arr.splice(key, 0, value);
}

console.log(str);
console.log(arr.join(""));


