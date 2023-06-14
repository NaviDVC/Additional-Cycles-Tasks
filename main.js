// 1. Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)

document.write(`<pre>1. Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)</pre>`);

let arr = [];

for (let i = 20; i <= 30; i += 0.5) {
    if (i <=30) {
    arr.push(i);
    }
}

document.write(`<p>${arr.join(', ')}</p>`);
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 2. Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

document.write(`<pre>2. Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів</pre>`);

let hryvnia = 0;

for (let i = 10; i <= 100; i += 10) {
    hryvnia = i * 40;
    document.write(`<p>$${i} × 40 = ₴${hryvnia}</p>`);
}

document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 3. Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

document.write(`<pre>3. Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N</pre>`)

let lastNumber = 100;
let firstNumber = 1;
let list = [];

while (firstNumber * firstNumber <= lastNumber) {
    list.push(firstNumber);
    firstNumber++;
}

document.write(`<p>${list.join(', ')}</p>`);
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 4. Дано ціле число. З'ясувати, чи воно є простим (простим називається число, більше ніж 1, які не мають інших дільників крім 1 і себе).

document.write(`<pre>4. Дано ціле число. З'ясувати, чи є воно простим (простим називається число, більше ніж 1, які не мають інших дільників крім 1 і себе).</pre>`)

let primeNumber = prompt('Enter some number to find out if it is prime: ');
let isPrime = true;

for (let i = 2; i < primeNumber; i++) {
  if (primeNumber % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  document.write(`<p>${primeNumber} is prime!</p>`);
} else {
  document.write(`<p>${primeNumber} is not prime!</p>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 5. Дано число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

document.write(`<pre>5. Дано число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)</pre>`)

let userNumber = Number(prompt('Enter some number to find out if is it possible to get this number by reducing the number 3 to a certain power: '));
let result = 1;

for (let i = 0; i <= userNumber; i++) {
    if (result === userNumber) {
        document.write(`<p>You can get ${userNumber} by raisind the number 3 to the power ${i}</p>`);
        break;
    } else if (result > userNumber) {
        document.write(`<p>You can't get ${userNumber} by raising the number 3 to any power</p>`);
        break;
    }
    result *= 3;
}
