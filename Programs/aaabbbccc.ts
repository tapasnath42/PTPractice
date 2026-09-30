let str = "a3b3c4d2";
let newstr = "";
let i=0;

let char = 0;
let repeat = 1;

while(i<str.length/2){
    for(let i=0; i<Number(str[repeat]); i++){
        newstr +=str[char];
    }
    char = char +2;
    repeat = repeat +2;
    i++;
}

console.log(newstr);