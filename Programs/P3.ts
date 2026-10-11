// Replace first character with last character in every word.

let str = "hello how are you";
let strarr = Array.from(str.split(" "));
let newstr = "";

for(let i=0; i<strarr.length; i++){
let str1 = strarr[i];
for(let i=0; i<1; i++){
    arr = Array.from(str1);
    let temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    newstr += arr.join("") + " ";
}

}


console.log(str);
console.log(arr);
console.log(newstr);
