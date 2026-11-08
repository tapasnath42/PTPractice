// Write a Java Program to find the largest and smallest word in a string

let str = 'Rahul Shetty Academy is the best';
let arr = Array.from(str.split(" "))
let wordarr = [];

let map = new Map<number,string>();

for(let n of arr){
    map.set(n.length, n);
    wordarr.push(n.length);
}

wordarr.sort((a,b)=>a-b);

console.log("smallest : " + map.get(wordarr[0]));
console.log("largest : " + map.get(wordarr[wordarr.length-1]));




