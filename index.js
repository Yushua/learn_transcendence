console.log('come on WORLD');

//declaring information
let name = 'yusha';
console.log(name);

let person = {
    me: 'hello',
    age: 40
};

console.log(person.age);
//no reserved


let selectedColours = ['red', 'blue'];
selectedColours[10] = 4;
console.log(selectedColours);

function greet(name){
    console.log(name);
}

greet('insert something');

let bussines = {
    loan: 20,
    hours: 86,
    interest: 1.03,
    montly: 35,

    wage: function(){
        return this.loan * this.hours * this.interest + this.montly;
    }
};
greet(bussines.wage());