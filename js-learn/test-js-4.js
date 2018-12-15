// задание 1
// function alphaFun() {
//     var alphaString = prompt('Число от 1 до 999'); // string value
//     var alphaArr = alphaString.split(''); // transform in the array
//     var aplhaObj = {};
//     aplhaObj.hundreds = +alphaArr[0];
//     aplhaObj.tens = +alphaArr[1];
//     aplhaObj.one = +alphaArr[2];
//
//     if (alphaArr.length > 3) { // we are check array length
//         delete aplhaObj.hundreds;
//         delete aplhaObj.tens;
//         delete aplhaObj.one;
//         console.error('Не верное значение');
//         console.log(aplhaObj);
//     } else if (alphaArr.length <= 3) {
//
//         console.log(aplhaObj);
//
//     }
//
//
// }
//
// alphaFun();
//
//
// // задание 2
//
// var price = [1, 2, 3, 5, 61234, 235, 1241];
//
// function countBasketPrice(price) {
//     var summ = 0;
//     for (var i = 0; i < price.length; i++) {
//         summ += price[i];
//     }
//     console.log(summ);
// }
//
// countBasketPrice(price);


var product = {
  item: 'dress',
  count: '2',
  price: '23'
};

function priceTotal () {
    var summ = product.count * product.price;
    console.log(summ);
    return summ;

}
priceTotal ();
