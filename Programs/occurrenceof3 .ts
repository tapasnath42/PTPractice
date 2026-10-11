//15. Program to count occurrence of 3 between two numbers
//Input : Start 30 and End 35
//Output :
//Numbers containing the digit ‘3’: [ 30, 31, 32, 33, 34, 35 ]
//Total occurrences of the digit ‘3’: 7

let arr = [ 30, 31, 32, 33, 34, 35 ];
let count =0;

for(let i=0; i<arr.length; i++){

    let interarr = Array.from(String(arr[i]).split(""));

    for(let j=0; j<interarr.length; j++){

        if(interarr[j]=='2'){
            count++;
        }

    }

}

console.log(count);