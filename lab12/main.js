console.log("завдання 1");
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("calculateSum(5) =", calculateSum(5)); 


console.log("\nзавдання 2");
const multiply = function (a, b) {
    return a * b;
};
console.log("multiply(3, 4) =", multiply(3, 4)); 


console.log("\nзавдання 3");
const power = (a, b) => a ** b;
console.log("power(2, 5) =", power(2, 5));


console.log("\nзавдання 4");

function harmonicSeries(n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + harmonicSeries(n - 1);
}
console.log("harmonicSeries(4) =", harmonicSeries(4));


console.log("\nзавдання 5");

function createDivider(divisor) {
    return function (number) {
        return number / divisor;
    };
}
const divideByTwo = createDivider(2);
console.log("divideByTwo(10) =", divideByTwo(10)); 


console.log("\nзавдання 6");

function processSet(set, callback) {
    for (let value of set) {
        callback(value);
    }
}

const mySet = new Set([1, 2, 3, 4]);
processSet(mySet, (value) => {
    console.log("Set x2:", value*2);
});