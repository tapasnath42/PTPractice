// Find Palindromes

let str = "iammalayalamami";
let substrings = [];

for(let i=0; i<str.length; i++){

    for(let j=i+2; j<=str.length; j++){
        let substr = str.slice(i,j);
        let reversesubstr = substr.split("").reverse().join("");

        if(substr===reversesubstr){
            substrings.push(substr);
        }

    }

}

console.log(substrings);