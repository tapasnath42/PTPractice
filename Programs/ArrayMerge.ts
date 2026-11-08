//Type 1
const numbers: number[] = [1, 2, 3];
const words: string[] = ["apple", "banana"];

// TypeScript infers the type as (number | string)[]
const merged1 = [...numbers, ...words]; 
console.log(merged1); // [1, 2, 3, "apple", "banana"]

//Type 2
const array1: string[] = ["a", "b"];
const array2: number[] = [4, 5];
// Explicitly type the result if combining different types
const merged2: (string | number)[] = array1.concat(array2);
console.log(merged2); // ["a", "b", 4, 5]

//Type 3
const targetArray: (string | number)[] = ["x", "y"];
const sourceArray: number[] = [10, 20];
// Modifies targetArray directly
targetArray.push(...sourceArray);
console.log(targetArray); // ["x", "y", 10, 20]

