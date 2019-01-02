window.onload = function () {


// two

//
//     function arrayProduct() {
//         var product = [
//             {
//                 item: 'dress',
//                 img: 'img/card_item.jpg',
//                 counts: '1',
//                 price: '400'
//             },
//             {
//                 item: 'paint',
//                 img: 'img/card_item.jpg',
//                 counts: '1',
//                 price: '200'
//             },
//             {
//                 item: 'rait',
//                 img: 'img/card_item.jpg',
//                 counts: '3',
//                 price: '500'
//             }
//         ];
//
//         if (product.length > 0) {
//             var totalPrice = 0;
//
//             for (p = 0; p < product.length; p++) {
//                 var nameProduct = product[p].item;
//                 var imgProduct = product[p].img;
//                 var countProduct = product[p].counts;
//                 var priceProduct = product[p].price;
//
//                 cardFramework(nameProduct, imgProduct, countProduct, priceProduct);
//
//             }
//             var totalSumm = [];
//             for (var i = 0; i < product.length; i++) {
//
//                 var price = product[i].price * product[i].counts;
//                 totalSumm.push(price);
//             }
//
//
//             for (var n = 0; n < totalSumm.length; n++) {
//                 totalPrice = totalPrice + parseInt(totalSumm[n]);
//             }
//
//             cardFrameworkBottom(totalPrice);
//
//         } else {
//             var $cardButtonCheck = document.createElement('a');
//             var $cardButtonShop = document.createElement('a');
//             var $cardEmptyString = document.createElement('div');
//
//
//             $cardButtonCheck.classList.add('card_product__checkout');
//             $cardButtonShop.classList.add('card_product__toCard', 'btn_empty_grey');
//             $cardEmptyString.classList.add('card_empty');
//
//             $cardList.appendChild($cardEmptyString);
//             $cardList.appendChild($cardButtonCheck);
//             $cardList.appendChild($cardButtonShop);
//
//             $cardButtonCheck.textContent = 'checkout';
//             $cardButtonShop.textContent = 'Go to cart';
//             $cardEmptyString.textContent = 'Корзина пуста';
//         }
//     }
//
//     var $cardList = document.getElementById('card_list');
//
//
//     function cardFramework(nameProduct, imgProduct, countProduct, priceProduct) {
//
//         var $cardProduct = document.createElement('div');
//         var $cardImg = document.createElement('div');
//         var $cardDesc = document.createElement('div');
//         var $cardDelete = document.createElement('div');
//         var $cardSeparator = document.createElement('div');
//         var $cardDescName = document.createElement('div');
//         var $cardDescRespect = document.createElement('div');
//         var $cardDescPrice = document.createElement('div');
//         var $cardDescCount = document.createElement('span');
//         var $cardDescSumm = document.createElement('span');
//         var $cardDeleteImg = document.createElement('i');
//         var $cardDeleteHref = document.createElement('a');
//
//
//         var $cardImgItem = document.createElement('img');
//         var $cardImgRespect = document.createElement('img');
//
//         $cardProduct.classList.add('card_product__item', 'card_item');
//         $cardImg.classList.add('card_item__img');
//         $cardDesc.classList.add('card_item__desc', 'card_desc');
//         $cardDelete.classList.add('card_item__delete');
//         $cardSeparator.classList.add('card_separator');
//         $cardDescName.classList.add('card_desc__name');
//         $cardDescRespect.classList.add('card_desc__respect');
//         $cardDescPrice.classList.add('card_desc__price');
//         $cardDescCount.classList.add('card_desc__count');
//         $cardDescSumm.classList.add('card_desc__summ');
//
//
//         $cardList.appendChild($cardProduct);
//         $cardList.appendChild($cardSeparator);
//
//         $cardProduct.appendChild($cardImg);
//         $cardProduct.appendChild($cardDesc);
//         $cardProduct.appendChild($cardDelete);
//
//         $cardDelete.appendChild($cardDeleteHref);
//         $cardDeleteHref.appendChild($cardDeleteImg);
//         $cardDeleteImg.classList.add('fas', 'fa-times-circle');
//
//         $cardImg.appendChild($cardImgItem);
//
//         $cardDesc.appendChild($cardDescName);
//         $cardDesc.appendChild($cardDescRespect);
//         $cardDesc.appendChild($cardDescPrice);
//
//         $cardDescPrice.appendChild($cardDescCount);
//         $cardDescPrice.appendChild($cardDescSumm);
//
//         $cardDescCount.textContent = countProduct;
//         $cardDescSumm.textContent = priceProduct;
//
//         $cardDescRespect.appendChild($cardImgRespect);
//         $cardImgRespect.src = 'img/stars_respect.jpg';
//
//         $cardDescPrice.appendChild($cardDescCount);
//         $cardDescPrice.appendChild($cardDescSumm);
//
//
//         $cardImg.appendChild($cardImgItem);
//         $cardImgItem.src = imgProduct;
//
//         $cardDescName.textContent = nameProduct;
//
//
//     }
//
//     function cardFrameworkBottom(totalPrice) {
//         var $cardTotalPrice = document.createElement('div');
//         var $cardButtonCheck = document.createElement('a');
//         var $cardButtonShop = document.createElement('a');
//         var $cardTotalPriceLeft = document.createElement('span');
//         var $cardTotalPriceRight = document.createElement('span');
//
//         $cardTotalPrice.classList.add('card_product__totalPrice');
//         $cardButtonCheck.classList.add('card_product__checkout');
//         $cardButtonShop.classList.add('card_product__toCard', 'btn_empty_grey');
//         $cardList.appendChild($cardTotalPrice);
//         $cardTotalPrice.appendChild($cardTotalPriceLeft);
//         $cardTotalPrice.appendChild($cardTotalPriceRight);
//
//         $cardList.appendChild($cardButtonCheck);
//         $cardList.appendChild($cardButtonShop);
//         $cardButtonCheck.textContent = 'checkout';
//         $cardButtonShop.textContent = 'Go to cart';
//         $cardTotalPriceLeft.textContent = 'TOTAL';
//         $cardTotalPriceRight.textContent = totalPrice;
//     }
//
//
//     arrayProduct();
};
