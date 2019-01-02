// задание 1
// var a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // 2 инкремент перед переменной, сначала произойдёт увеличение потом присвоение
// d = b++; console.log(d);           // 1 инкремент после переменной сначала произойдёт присловение потом увеличение на 1
// c = (2+ ++a); console.log(c);      // 5 здесь у переменной а уже значение 2, инкремент увеличивает значение на 1 и получается при сумме 5
// d = (2+ b++); console.log(d);      // 4 у b значение 2, инкремент произодёт после сложения
// console.log(a);                    // 3 значение обусловлено тем что а 2 раза был инкремирован
// console.log(b);                    // значение 3 поскольку так же как и переменная а был 2 раза инкремирован

//задание 2
// var a = 2;
// var x = 1 + (a *= 2); // присваивание с умножением а = а * 2
//
// console.log(x); // результат 5
//

//задание 3
// var a = +prompt('значение а');
// var b = +prompt('значение b');
//
// if (a >= 0 && b >= 0) {
// console.log (a - b);
// console.log ('оба числа положительные');
// } else if (a < 0 && b < 0 ) {
//     console.log(a * b);
//     console.log('оба числа отрицательные');
// } else if (a >= 0 && b < 0) {
//     console.log(a + b);
//     console.log('а положительное b отрицательное');
// } else if (a < 0 && b >= 0 ) {
//     console.log(a + b);
//     console.log('а отрицательное b положительное');
// } else {
//     console.log('недопустимые значения');
// }
// switch (a, b) {
//     case a >= 0 && b >= 0 :
//         console.log(a - b);
//         console.log('оба числа положительные');
//         break;
//     case a < 0 && b < 0:
//         console.log(a * b);
//         console.log('оба числа отрицательные');
//         break;
//     case a >= 0 && b < 0:
//         console.log(a + b);
//         console.log('а положительное b отрицательное');
//         break;
//     case a < 0 && b >= 0:
//         console.log(a + b);
//         console.log('а отрицательное b положительное');
//         break;
// }

//задание 4
// var aside = +prompt('Введи число от 0 до 15');
//
// switch (aside) {
//     case 0:
//         console.log(0);
//     case 1:
//         console.log(1);
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
//     case 6:
//         console.log(6);
//     case 7:
//         console.log(7);
//     case 8:
//         console.log(8);
//     case 9:
//         console.log(9);
//     case 10:
//         console.log(10);
//     case 11:
//         console.log(11);
//     case 12:
//         console.log(12);
//     case 13:
//         console.log(13);
//     case 14:
//         console.log(14);
//     case 15:
//         console.log(15);
//         break;
//     default:
//         console.error('не верное значение');
// }
//

//задание 5
// var result;
//
// function sum(arg1, arg2) {
//     var result = arg1 + arg2;
//     return result;
// }
//
// function difference(arg1, arg2) {
//     var result = arg1 - arg2;
//     return result;
// }
//
// function performing(arg1, arg2) {
//     var result = arg1 * arg2;
//     return result;
// }
//
// function particular(arg1, arg2) {
//     var result = arg1 / arg2;
//     return result;
// }

//задание 6
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case '+':
//             sum(arg1, arg2);
//             break;
//         case '-':
//             difference(arg1, arg2);
//             break;
//         case '*':
//             performing(arg1, arg2);
//             break;
//         case '/':
//             particular(arg1, arg2);
//             break;
//         default:
//             console.error('Неверный символ');
//     }
//     return result;
// }

// задание 7
// var x = 0;
// var y = null;
//
// console.log(x == y); // будет false, т.к. null это отделный тип, и он не будет равен типу Number

//задание 8 - четсно подсмотрел с урока, не могу пока представить через условие сам
function fun(alpha, beta) {
    if (beta === 1) {
        return alpha;
    } else {
        return fun(alpha, beta - 1);
    }
}
