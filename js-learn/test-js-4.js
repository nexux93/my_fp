// задание 1


// function alphaFun() {
//     var alphaString = prompt('Число от 1 до 999'); // string value
//     var alphaArr = alphaString.split(''); // transform in the array
//     var aplhaObj = {};
//
//     if (alphaArr.length == 1) {
//         aplhaObj.one = +alphaArr[0];
//
//     } else if (alphaArr.length == 2) {
//         aplhaObj.tens = +alphaArr[0];
//         aplhaObj.one = +alphaArr[1];
//
//     } else if (alphaArr.length == 3) {
//         aplhaObj.hundreds = +alphaArr[0];
//         aplhaObj.tens = +alphaArr[1];
//         aplhaObj.one = +alphaArr[2];
//     }
//
//     if (alphaArr.length > 3) { // we are check array length
//         delete aplhaObj.hundreds;
//         delete aplhaObj.tens;
//         delete aplhaObj.one;
//         console.error('Не верное значение');
//         console.log(aplhaObj);
//
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


// задание 2

var product = [
    {
        item: 'dress',
        count: '1',
        price: '1'
    },
    {
        item: 'paint',
        count: '1',
        price: '1'
    },
    {
        item: 'rait',
        count: '3',
        price: '1'
    }
];


function priceTotal() {

    var totalSumm = [];
    for (var i = 0; i < product.length; i++) {

        var price = product[i].price * product[i].count;
        totalSumm.push(price);
    }

    var totalPrice = 0;
    for (i = 0; i < totalSumm.length; i++) {
        totalPrice = totalPrice + parseInt(totalSumm[i]);
    }

    console.log(totalPrice);
    return totalSumm;

}

priceTotal();
