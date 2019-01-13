window.onload = function () {

    var product = [
        {
            img: 'img/product_item.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '1',
            id: 1,
            color: 'red',
            size: 'XXL'

        },
        {
            img: 'img/product_item.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 2,
            color: 'red',
            size: 'XXL'
        },
        {
            img: 'img/product_item.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '3',
            id: 3,
            color: 'red',
            size: 'XXL'
        },
        {
            img: 'img/product_item.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '4',
            id: 4,
            color: 'red',
            size: 'XXL'
        },
        {
            img: 'img/product_item.jpg',
            item: 'Mango People T-shirt',
            price: '52',
            counts: '5',
            id: 5,
            color: 'red',
            size: 'XXL'
        }
    ];
    // удаление элементов
    var $listAction = document.getElementById('product_list_action');
    var $productChildren = document.getElementById('product_row');
    var $totalPrice = document.getElementById('total');
    var $totalSubPrice = document.getElementById('subTotal');
    var subPrice = 0;
    var totalPrice = 0;
    var priceTotal = 0;


    function deadStar(event) {
        var target = event.target;
        var targetActoin = target.getAttribute('data-action');
        if (targetActoin == 'delete') {

            while (target != 'div.product_list_item') {
                if (target == null) {
                    break;

                } else if (target.className == 'product_list_item') {
                    target.remove();
                }
                target = target.parentNode;
            }
        }
        checkChildrenElement();
    }


    function checkChildrenElement() {

        var childrenLenght = $productChildren.children.length;

        if (childrenLenght === 0) {
            var $spanCardEmpty = document.createElement('div');

            $spanCardEmpty.textContent = 'Корзина пуста';

            $productChildren.appendChild($spanCardEmpty);

        }

    }


    function shopingCardPosition() {
        if (product.length > 0) {

            for (var u = 0; u < product.length; u++) {
                var prodtctShopingImg = product[u].img;
                var productShopingColor = product[u].color;
                var productShopingSize = product[u].size;
                var productShopingPrice = product[u].price;
                var productShopingCount = product[u].counts;

                subPrice = productShopingPrice * productShopingCount;

                shopingCardConstructor(prodtctShopingImg,
                    productShopingColor,
                    productShopingSize,
                    productShopingPrice,
                    productShopingCount)
            }

             priceTotal = totalSumm();
            $totalPrice.textContent = '$' + priceTotal;
            $totalSubPrice.textContent = '$' + priceTotal;


        } else {
            console.log('в массиве ничего нет');
        }
    }

    function shopingCardConstructor(prodtctShopingImg,
                                    productShopingColor,
                                    productShopingSize,
                                    productShopingPrice,
                                    productShopingCount,
                                    priceTotal) {

        subPrice = productShopingPrice * productShopingCount;

        var $productListItem = document.createElement('div');
        var $productListItemLeft = document.createElement('div');
        var $ItemImgBlock = document.createElement('div');
        var $ItemImg = document.createElement('img');
        var $ItemDescription = document.createElement('div');
        var $ItemName = document.createElement('span');
        var $ItemNameLink = document.createElement('a');
        var $ItemSpecColor = document.createElement('span');
        var $ItemSpecColorName = document.createElement('span');
        var $ItemSpecSize = document.createElement('span');
        var $ItemSpecSizeRate = document.createElement('span');
        var $productListItemRight = document.createElement('div');
        var $ItemPrice = document.createElement('div');
        var $ItemCount = document.createElement('div');
        var $ItemCountInput = document.createElement('input');
        var $ItemShipping = document.createElement('div');
        var $ItemSubTotal = document.createElement('div');
        var $ItemActionButt = document.createElement('div');
        var $ItemDelete = document.createElement('i');

        $productListItem.classList.add('product_list_item');
        $productListItemLeft.classList.add('product_list_item_left');
        $ItemDescription.classList.add('product_list_item_description');
        $ItemName.classList.add('product_name');
        $ItemNameLink.classList.add('product_name_link');
        $ItemSpecColor.classList.add('product_specification');
        $ItemSpecColorName.classList.add('specification_concern');
        $ItemSpecSize.classList.add('product_specification');
        $ItemSpecSizeRate.classList.add('specification_concern');
        $productListItemRight.classList.add('product_list_item_right');
        $ItemPrice.classList.add('description_block_item');
        $ItemCount.classList.add('description_block_item');
        $ItemCountInput.classList.add('product_price_input');
        $ItemShipping.classList.add('description_block_item');
        $ItemSubTotal.classList.add('description_block_item');
        $ItemActionButt.classList.add('description_block_item');
        $ItemDelete.classList.add('fas', 'fa-times-circle');

        $ItemImg.src = prodtctShopingImg;
        $ItemSpecColor.textContent = 'Color:' + ' ';
        $ItemSpecColorName.textContent = productShopingColor;
        $ItemSpecSize.textContent = 'Size:' + ' ';
        $ItemSpecSizeRate.textContent = productShopingSize;
        $ItemPrice.textContent = '$' + productShopingPrice;
        $ItemCountInput.type = 'number';
        $ItemCountInput.value = productShopingCount;
        $ItemSubTotal.textContent = subPrice;
        $ItemDelete.setAttribute('data-action', 'delete');

        $ItemSpecColor.appendChild($ItemSpecColorName);
        $ItemSpecSize.appendChild($ItemSpecSizeRate);
        $productChildren.appendChild($productListItem);
        $productListItem.appendChild($productListItemLeft);
        $productListItem.appendChild($productListItemRight);
        $productListItemLeft.appendChild($ItemImgBlock);
        $ItemImgBlock.appendChild($ItemImg);
        $productListItemLeft.appendChild($ItemDescription);
        $ItemDescription.appendChild($ItemSpecColor);
        $ItemDescription.appendChild($ItemSpecSize);
        $ItemSpecColor.appendChild($ItemSpecColorName);
        $ItemSpecSize.appendChild($ItemSpecSizeRate);

        $productListItemRight.appendChild($ItemPrice);
        $productListItemRight.appendChild($ItemCount);
        $ItemCount.appendChild($ItemCountInput);
        $productListItemRight.appendChild($ItemShipping);
        $productListItemRight.appendChild($ItemSubTotal);

        $productListItemRight.appendChild($ItemActionButt);
        $ItemActionButt.appendChild($ItemDelete);


    }

    function totalSumm() {
        var totalSumm = [];
        for (var i = 0; i < product.length; i++) {

            var price = product[i].price * product[i].counts;
            totalSumm.push(price);
        }


        for (var n = 0; n < totalSumm.length; n++) {
            totalPrice = totalPrice + parseInt(totalSumm[n]);
        }
        return totalPrice;
    }

    $listAction.addEventListener("click", deadStar);
    shopingCardPosition();

};
