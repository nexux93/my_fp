window.onload = function () {

    var $cardList = document.getElementById('card_list');

    function cleanerCard() {

        while ($cardList.firstElementChild) {

            $cardList.removeChild($cardList.firstElementChild);
        }

        var productArray = [
            {
                item: 'paint',
                img: 'img/card_item.jpg',
                counts: '1',
                price: '200',
                id: 8
            }
        ];

    }


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


    function catalogConstraction() {


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

    function catalogTag(catalogImg, catalogName, catalogPrice, catalogItemId) {
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

    catalogConstraction();


// two


    function arrayProduct() {

        if (product.length > 0) {
            var totalPrice = 0;

            for (p = 0; p < product.length; p++) {
                var nameProduct = product[p].item;
                var imgProduct = product[p].img;
                var countProduct = product[p].counts;
                var priceProduct = product[p].price;

                cardFramework(nameProduct, imgProduct, countProduct, priceProduct);

            }
            var totalSumm = [];
            for (var i = 0; i < product.length; i++) {

                var price = product[i].price * product[i].counts;
                totalSumm.push(price);
            }


            for (var n = 0; n < totalSumm.length; n++) {
                totalPrice = totalPrice + parseInt(totalSumm[n]);
            }

            cardFrameworkBottom(totalPrice);

        } else {
            var $cardButtonCheck = document.createElement('a');
            var $cardButtonShop = document.createElement('a');
            var $cardEmptyString = document.createElement('div');


            $cardButtonCheck.classList.add('card_product__checkout');
            $cardButtonShop.classList.add('card_product__toCard', 'btn_empty_grey');
            $cardEmptyString.classList.add('card_empty');

            $cardList.appendChild($cardEmptyString);
            $cardList.appendChild($cardButtonCheck);
            $cardList.appendChild($cardButtonShop);

            $cardButtonCheck.textContent = 'checkout';
            $cardButtonShop.textContent = 'Go to cart';
            $cardEmptyString.textContent = 'Корзина пуста';
        }
    }


    function cardFramework(nameProduct, imgProduct, countProduct, priceProduct) {

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

        $cardDescCount.textContent = countProduct;
        $cardDescSumm.textContent = priceProduct;

        $cardDescRespect.appendChild($cardImgRespect);
        $cardImgRespect.src = 'img/stars_respect.jpg';

        $cardDescPrice.appendChild($cardDescCount);
        $cardDescPrice.appendChild($cardDescSumm);


        $cardImg.appendChild($cardImgItem);
        $cardImgItem.src = imgProduct;

        $cardDescName.textContent = nameProduct;


    }

    function cardFrameworkBottom(totalPrice) {

        var $cardButtonCheck = document.createElement('a');
        var $cardButtonShop = document.createElement('a');




        $cardButtonCheck.classList.add('card_product__checkout');
        $cardButtonShop.classList.add('card_product__toCard', 'btn_empty_grey');




        $cardList.appendChild($cardButtonCheck);
        $cardList.appendChild($cardButtonShop);
        $cardButtonCheck.textContent = 'checkout';
        $cardButtonShop.textContent = 'Go to cart';


    }

    arrayProduct();

    var $addToCard = document.getElementById('1');
    $addToCard.onclick = cleanerCard;
};
