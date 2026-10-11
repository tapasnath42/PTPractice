// Prime numbers
let res = true;
let primenumbeers = [];

for (let i = 3; i < 100; i++) {

    for (let j = 2; j < i; j++) {

        if (i % j == 0) {
            res = false;
        }

    }

    if (res) {
        primenumbeers.push(i);
    }

    res = true;

}

console.log(primenumbeers);