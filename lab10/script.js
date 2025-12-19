console.log(a); 
var a = 10;
try {
    console.log(b);
} catch(e) {
    console.log("Помилка b: let не підтримує hoisting");
}
let b = 20;

function testScope() {
    if (true) {
        var x = 5;
        let y = 10;
        const z = 15;
    }
    console.log(x);
    try { console.log(y); } catch(e) { console.log("y не доступна"); }
    try { console.log(z); } catch(e) { console.log("z не доступна"); }
}
testScope();

console.log(5 + "5");
console.log("5" - 2);
console.log(true + false);
console.log(null + 1);
console.log(undefined + 1);
console.log(0 == false);
console.log(0 === false);

const person = {
    name: "John",
    age: 30
};

Object.freeze(person);

person.age = 31;
person.city = "New York";
console.log(person);

function checkType(value) {
    return typeof value;
}

console.log(checkType(10));
console.log(checkType("Hello"));
console.log(checkType(null));