/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            result = amount(arg1, arg2);
            break;
        case 'subtraction':
            result = difference(arg1, arg2);
            break;
        case 'multiplication':
            result = multiplication(arg1, arg2);
            break;
        case 'division':
            result = division(arg1, arg2);
            break;
    }
    return result;
}

let a = +prompt('Enter first number: ');
let b = +prompt('Enter second number: ');
let operation = prompt('Choose an operation: addition, subtraction, multiplication or division: ');
alert(mathOperation(a, b, operation));


