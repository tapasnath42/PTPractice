// Armstrong number.

let number = "123";
let arr = Array.from(number);
let newnumber = 0;

for(let i=0; i<number.length; i++){

    newnumber += Number(Math.pow(Number(number[i]), number.length));
    
}

console.log(newnumber==Number(number) ? `${number} is Armstrong Number` : `${number} is not Armstrong Number`);

