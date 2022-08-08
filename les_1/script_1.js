/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/
'use strict';

let tC = prompt('Enter a tempature in Celsius: ');
let tF = (9 / 5) * tC + 32
alert(`You entered ${tC}°C, it equal ${tF.toFixed(2)}°F`)



/*var Tc = parseFloat(prompt('Enter the temperature in °C (integer or with the "."): '));
var Tf = (9 / 5) * Tc + 32;
alert(`${Tc.toFixed(2)}°C it's ${Tf.toFixed(2)}°F`);*/
