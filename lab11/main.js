console.log("завдання 1");

let n1 = parseInt(prompt("Завдання 1: Введіть розмір ромба n:"));

if (!isNaN(n1) && n1 > 0) {
    for (let i = 1; i <= n1; i++) {
        let row = " ".repeat(n1 - i);
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            row += j;
        }
        console.log(row);
    }

    for (let i = n1 - 1; i >= 1; i--) {
        let row = " ".repeat(n1 - i);
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            row += j;
        }
        console.log(row);
    }
} else {
    console.log("Помилка");
}

console.log("\nзавдання 2");

let n2 = parseInt(prompt("Завдання 2: Введіть значення n для обчислення суми ряду:"));

if (!isNaN(n2) && n2 > 0) {
    let sum = 0;
    let seriesStr = "S= ";

    for (let i = 1; i <= n2; i++) {
        sum += 1 / i;

        if (i === 1) {
            seriesStr += "1";
        } else {
            seriesStr += ` + 1/${i}`;
        }
    }
    console.log(" " + seriesStr);
    console.log(`Сума ряду S= ${sum}`);
} else {
    console.log("Помилка");
}

console.log("\nзавдання 3");

const targetNumber = Math.floor(Math.random() * 20) + 1;
let isGuessed = false;

while (!isGuessed) {
    let userInput = prompt("Завдання 3: Вгадати число від 1 до 20");
    
    if (userInput === null) {
        console.log("ok");
        break;
    }

    let guess = parseInt(userInput);

    if (isNaN(guess)) {
        alert("потрібно ввести коректне число");
    } else if (guess > targetNumber) {
        alert("Менше");
    } else if (guess < targetNumber) {
        alert("Більше");
    } else {
        alert(`урааааа маладца, це було число ${targetNumber}!`);
        console.log(`Вгадане число було ${targetNumber}.`);
        isGuessed = true;
    }
}