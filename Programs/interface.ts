interface i1 {
    firstname: string;
    lastname: string;
    age: number;
    fullname():string;
}

const imp: i1 = {
    firstname: "john",
    lastname: "cena",
    age: 9,
    fullname() {
        return this.firstname + " " + this.lastname;
    }
};

console.log(imp.fullname());