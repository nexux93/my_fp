window.onload = function () {

    var calculatePrice;
    var $cardList = document.getElementById('card_list');
    var product = [
        {
            img: 'img/Layer_4.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 1

        },
        {
            img: 'img/Layer_4.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 2
        },
        {
            img: 'img/Layer_4.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 3
        },
        {
            img: 'img/Layer_4.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 4
        },
        {
            img: 'img/Layer_4.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 5
        },
        {
            item: 'dress',
            img: 'img/card_item.jpg',
            counts: '1',
            price: '400',
            id: 6
        },
        {
            item: 'paint',
            img: 'img/card_item.jpg',
            counts: '1',
            price: '200',
            id: 8
        },
        {
            item: 'rait',
            img: 'img/card_item.jpg',
            counts: '3',
            price: '500',
            id: 7
        }
    ];

    var cardArray = [];

    shoppingBasket();
    catalogConstructor();

// проверка массива для корзины и запись туда значений
    function shoppingBasket() {
        if (cardArray.length > 0) {
            for (var c = 0; cardArray.length > c; c++) {

                var cardArrayImg = cardArray[c].img;
                var cardArrayName = cardArray[c].item;
                var cardArrayPrice = cardArray[c].price;
                var cardArrayCount = cardArray[c].counts;

                cardFramework(cardArrayImg, cardArrayName, cardArrayPrice, cardArrayCount);

            }
            calculatePrice = calculationTotalPrice();
            cardFrameworkTotalPrice();
            cardFrameworkButton();


        } else {
            var $cardEmptyString = document.createElement('div');

            $cardEmptyString.classList.add('card_empty');

            $cardList.appendChild($cardEmptyString);

            $cardEmptyString.textContent = 'Корзина пуста';

            cardFrameworkButton();

        }

    }

    function calculationTotalPrice() {

        var totalPrice = 0;
        var totalSumm = [];
        for (var i = 0; i < cardArray.length; i++) {

            var price = cardArray[i].price * cardArray[i].counts;
            totalSumm.push(price);
        }

        for (var n = 0; n < totalSumm.length; n++) {
            totalPrice += parseInt(totalSumm[n]);
        }
        return totalPrice;
    }

    // создание каркаса корзины
    function cardFramework(cardArrayImg, cardArrayName, cardArrayPrice, cardArrayCount) {

        var $cardProduct = document.createElement('div');
        var $cardImg = document.createElement('div');
        var $cardDesc = document.createElement('div');
        var $cardDelete = document.createElement('div');
        var $cardSeparator = document.createElement('div');
        var $cardDescName = document.createElement('div');
        var $cardDescRespect = document.createElement('div');
        var $cardDescPrice = document.createElement('div');
        var $cardDescCount = document.createElement('span');
        var $cardDescSumm = document.createElement('span');
        var $cardDeleteImg = document.createElement('i');
        var $cardDeleteHref = document.createElement('a');


        var $cardImgItem = document.createElement('img');
        var $cardImgRespect = document.createElement('img');

        $cardProduct.classList.add('card_product__item', 'card_item');
        $cardImg.classList.add('card_item__img');
        $cardDesc.classList.add('card_item__desc', 'card_desc');
        $cardDelete.classList.add('card_item__delete');
        $cardSeparator.classList.add('card_separator');
        $cardDescName.classList.add('card_desc__name');
        $cardDescRespect.classList.add('card_desc__respect');
        $cardDescPrice.classList.add('card_desc__price');
        $cardDescCount.classList.add('card_desc__count');
        $cardDescSumm.classList.add('card_desc__summ');


        $cardList.appendChild($cardProduct);
        $cardList.appendChild($cardSeparator);

        $cardProduct.appendChild($cardImg);
        $cardProduct.appendChild($cardDesc);
        $cardProduct.appendChild($cardDelete);

        $cardDelete.appendChild($cardDeleteHref);
        $cardDeleteHref.appendChild($cardDeleteImg);
        $cardDeleteImg.classList.add('fas', 'fa-times-circle');

        $cardImg.appendChild($cardImgItem);

        $cardDesc.appendChild($cardDescName);
        $cardDesc.appendChild($cardDescRespect);
        $cardDesc.appendChild($cardDescPrice);

        $cardDescPrice.appendChild($cardDescCount);
        $cardDescPrice.appendChild($cardDescSumm);

        $cardDescCount.textContent = cardArrayCount;
        $cardDescSumm.textContent = cardArrayPrice;

        $cardDescRespect.appendChild($cardImgRespect);
        $cardImgRespect.src = 'img/stars_respect.jpg';

        $cardDescPrice.appendChild($cardDescCount);
        $cardDescPrice.appendChild($cardDescSumm);


        $cardImg.appendChild($cardImgItem);
        $cardImgItem.src = cardArrayImg;

        $cardDescName.textContent = cardArrayName;

    }

// проверка массива для каталога и запись туда значений
    // check array and declaration object
    function catalogConstructor() {
        if (product.length > 0) {
            for (var u = 0; u < product.length; u++) {

                var catalogImg = product[u].img;
                var catalogName = product[u].item;
                var catalogPrice = product[u].price;
                var catalogItemId = product[u].id;

                catalogTag(catalogImg, catalogName, catalogPrice, catalogItemId);

            }
        } else {
            console.log('В массиве каталога ничего нет');
        }
    }

    function catalogTag(catalogImg, catalogName, catalogPrice, catalogItemId) { // building DOM in card
        var $catalogItem = document.getElementById('catalog-item');
        var $catalogBlock = document.createElement('div');
        var $catalogAddBlock = document.createElement('div');
        var $catalogAddItem = document.createElement('div');
        var $catalogItemImg = document.createElement('div');
        var $catalogItemName = document.createElement('span');
        var $catalogItemPrice = document.createElement('span');
        var $catalogItemImgTag = document.createElement('img');
        var $catalogAddHref = document.createElement('a');
        var $catalogAddImg = document.createElement('img');


        $catalogItem.appendChild($catalogBlock);
        $catalogBlock.classList.add('item_block');

        $catalogBlock.appendChild($catalogAddBlock);
        $catalogAddBlock.classList.add('block_add');

        $catalogAddBlock.appendChild($catalogAddItem);
        $catalogAddItem.classList.add('add_item');

        $catalogAddItem.appendChild($catalogAddHref);
        $catalogAddHref.classList.add('block_add_hover_text');
        $catalogAddHref.href = '#';

        $catalogAddHref.textContent = 'Add to card';

        $catalogAddHref.appendChild($catalogAddImg);
        $catalogAddImg.src = 'img/add_img.svg';
        $catalogAddHref.id = catalogItemId;


        $catalogAddHref.appendChild($catalogAddImg);

        $catalogBlock.appendChild($catalogItemImg);
        $catalogItemImg.appendChild($catalogItemImgTag);
        $catalogItemImg.classList.add('item_img');
        $catalogItemImgTag.src = catalogImg;

        $catalogBlock.appendChild($catalogItemName);
        $catalogBlock.appendChild($catalogItemPrice);
        $catalogItemName.classList.add('item_text');
        $catalogItemPrice.classList.add('item_text', 'item_span');
        $catalogItemName.textContent = catalogName;
        $catalogItemPrice.textContent = '$' + catalogPrice;
    }


    // функция для создания кнопок в корзине
    function cardFrameworkButton() { // building card bottom with button
        var $cardButtonCheck = document.createElement('a');
        var $cardButtonShop = document.createElement('a');


        $cardButtonCheck.classList.add('card_product__checkout');
        $cardButtonShop.classList.add('card_product__toCard', 'btn_empty_grey');


        $cardList.appendChild($cardButtonCheck);
        $cardList.appendChild($cardButtonShop);
        $cardButtonCheck.textContent = 'checkout';
        $cardButtonShop.textContent = 'Go to cart';


    }

    // подсчёт общей стоимости товаров в корзине
    function cardFrameworkTotalPrice(calculatePrice) {
        var $cardTotalPrice = document.createElement('div');
        var $cardTotalPriceLeft = document.createElement('span');
        var $cardTotalPriceRight = document.createElement('span');

        $cardTotalPrice.classList.add('card_product__totalPrice');
        $cardTotalPrice.appendChild($cardTotalPriceLeft);
        $cardTotalPrice.appendChild($cardTotalPriceRight);

        $cardTotalPriceLeft.textContent = 'TOTAL';
        $cardTotalPriceRight.textContent = calculatePrice;

        $cardList.appendChild($cardTotalPrice);
    }


    var $1 = document.getElementById('1');

    $1.onclick = addArrayInCard;

    function addArrayInCard() {
        cardArray.push(
            {
                item: 'rait',
                img: 'img/card_item.jpg',
                counts: '3',
                price: '500',
                id: 7
            }
        );
        cleanerCard();


    }

    function cleanerCard() {

        while ($cardList.firstElementChild) {

            $cardList.removeChild($cardList.firstElementChild);
        }
        shoppingBasket();
    }
};
