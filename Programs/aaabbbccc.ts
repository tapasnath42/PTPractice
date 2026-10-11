// largest consecutive number

let num = [1, 2, 3, 4, 200, 201, 300, 301, 302];
let current = [num[0]];
let longest = current;

for (let i = 1; i < num.length; i++) {

    if (num[i] === num[i - 1] + 1) {
        current.push(num[i]);
    } else {
        if (current.length > longest.length) {
            longest = current;
        }

        current = [num[i]];

    }
}

if (current.length > longest.length) {
    longest = current;
}

console.log(longest);

