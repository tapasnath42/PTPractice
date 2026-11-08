// System.out.println(isAnagram("listen", "silent")); // true
//System.out.println(isAnagram("triangle", "integral")); // true

let str1 = "abc";
let str2 = "bacb";

let map1 = new Map();
let map2 = new Map();

for(let c of str1){
    map1.set(c, (map1.get(c)||0)+1);
}

for(let c of str2){
    map2.set(c, (map2.get(c)||0)+1);
}

let result = true;

if(map1.size!==map2.size){
    result = false;
}else{
    for(let[key,value] of map1){
        if(value!==map2.get(key)){
            result = false;
        }
    }
}

console.log(result ? "Anagram" : "not anagram");


