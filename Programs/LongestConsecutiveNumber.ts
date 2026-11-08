// longest consecutive numbers.

let arr = [1, 2, 3, 200, 300, 301, 302, 303, 304];
let current = [arr[0]];
let longest = current;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i-1]+1) {
        current.push(arr[i]);
    } else {
        if (current.length > longest.length) {
            longest = current;
        }
        current = [arr[i]];
    }
}

if (current.length > longest.length) {
    longest = current;
}

console.log(longest);
