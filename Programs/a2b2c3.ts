
let str1 = "a3b3c3";
let char1 = 0;
let repeat1 =1;


while(str1.length/2){

   
    for(let i=0; i<Number(str1[repeat1]); i++){
        console.log(str1[char1]);
    }

    char1 = char1+2;
    repeat1 = repeat1+2;

}

