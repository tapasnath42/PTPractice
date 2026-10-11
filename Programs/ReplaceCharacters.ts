// Automation Test Engineer

let str = "Automation Test Engineer";
let newstr = "";
let arrstr = Array.from(str.split(" "));

for(let i=0; i<arrstr.length; i++){

    let wordarr = arrstr[i].split("");
    let temp = wordarr[0];
    wordarr[0]=wordarr[wordarr.length-1];
    wordarr[wordarr.length-1]=temp;
    
    newstr +=wordarr.join("")+ " ";
}

console.log(newstr.trim());