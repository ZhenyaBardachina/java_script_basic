/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

let a = +prompt('Enter first number: ')
let b = +prompt('Enter second number: ')

function difference(a, b) {
    return(a - b)
}

function multiplication(a, b) {
    return(a * b)
}

function amount(a, b) {
    return(a + b)
}

function division(a, b) {
    return (a / b).toFixed(2)
}

console.log(difference(a, b));
console.log(multiplication(a, b));
console.log(amount(a, b));
console.log(division(a, b));