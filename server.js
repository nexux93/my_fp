(function ($) {
    $().ready(function () {
        var $catalItem = $('#catalog-item');
        var $cartList = $('#card_list');

        function bilderCatalog() {
            $.ajax({
                url: ' http://localhost:3000/goods',
                type: 'GET',
                dataType: 'json',
                success: function (goods) {
                    goods.forEach(function (item) {
                        // buy button
                        var $catalogAddHref = $('<span/>').addClass('block_add_hover_text').data(item).text('Add to cart').click(addToCart);

                        var $catalogAddImg = $('<img alt="" src="img/add_img.svg">');
                        var $catalogAddItem = $('<div/>').addClass('add_item');
                        var $catalogAddBlock = $('<div/>').addClass('block_add');
                        var $catalogItemName = $('<span/>').addClass('item_text').text(item.name);
                        var $catalogItemImgTag = $('<img alt="" src="">').attr('src', item.imgBig);
                        var $catalogItemImg = $('<div/>').addClass('item_img');
                        var $catalogItemPrice = $('<span/>').addClass('item_text item_span').text('$ ' + item.price);
                        var $catalogBlock = $('<div/>').addClass('item_block');

                        $($catalItem).append($catalogBlock);
                        $($catalogBlock).append($catalogAddBlock).append($catalogItemImg.append($catalogItemImgTag), $catalogItemName, $catalogItemPrice);
                        $($catalogAddBlock).append($catalogAddItem);
                        $($catalogAddItem).append($catalogAddHref);
                        $($catalogAddHref).append($catalogAddImg);
                        $($catalogAddHref).append($catalogAddImg);
                    })

                }
            })
        }

        function bilderCart() {
            var summ = 0;
            $($cartList).empty();
            $.ajax({
                url: 'http://localhost:3000/cart',
                type: 'GET',
                dataType: 'json',
                success: function (cart) {
                    cart.forEach(function (item) {
                        var $cardSeparator = $('<div/>').addClass('card_separator');
                        var $cardDescName = $('<div/>').addClass('card_desc__name').text(item.name);
                        var $cardImgRespect = $('<img alt="" src="img/stars_respect.jpg">');
                        var $cardDescRespect = $('<div/>').addClass('card_desc__respect').append($cardImgRespect);
                        var $cardDescCount = $('<span/>').addClass('card_desc__count').text(item.quantity + ' ' +'x').attr('id', 'cart-' + item.id);
                        var $cardDescSumm = $('<span/>').addClass('card_desc__summ').text(item.price);
                        // button delete
                        var $cardDeleteButton = $('<i/>').addClass('fas fa-times-circle').click(deleteCardButton).data(item);
                        // button add
                        var $cardAddButton = $('<i/>').addClass('fas fa-plus-circle').click(addCartButton).data(item);
                        // button minus
                        var $cartMinusButton = $('<i/>').addClass('fas fa-minus-circle').data(item).click(minusItem);

                        var $cardDescPrice = $('<div/>').addClass('card_desc__price').append($cardDescCount, $cardDescSumm);
                        var $cardDelete = $('<div/>').addClass('card_item__delete').append($cardDeleteButton, $cardAddButton, $cartMinusButton);
                        var $cardImgItem = $('<img alt="" src="">').attr('src', item.imgSmall);
                        var $cardDesc = $('<div/>').addClass('card_item__desc card_desc').append($cardDescName,
                            $cardDescRespect,
                            $cardDescPrice);
                        var $cardImg = $('<div/>').addClass('card_item__img').append($cardImgItem);
                        var $cardProduct = $('<div/>').addClass('card_product__item card_item').append($cardImg,
                            $cardDesc,
                            $cardDelete);

                        summ += +item.price * +item.quantity;

                        $($cartList).append($cardProduct, $cardSeparator);

                    });
                    bilderCartButton(summ);
                    countCartItem();
                }

            });

        }


        function deleteCardButton() {

            var good = $(this).data();
            $.ajax({
                url: 'http://localhost:3000/cart/' + good.id,
                type: 'DELETE',
                success: function () {
                    bilderCart();
                    cartIsEmpty();
                }
            })
        }

        function addCartButton() {
            var good = $(this).data();
            $.ajax({
                url: 'http://localhost:3000/cart/' + good.id,
                type: 'PATCH',
                dataType: 'json',
                data: {quantity: +good.quantity + 1},
                success: function () {
                    bilderCart();
                }
            })
        }

        function minusItem() {
            var good = $(this).data();
            $.ajax({
                url: 'http://localhost:3000/cart/' + good.id,
                type: 'PATCH',
                dataType: 'json',
                data: {quantity: +good.quantity - 1},
                success: function () {
                    bilderCart();
                    if(good.quantity < 2){
                        $.ajax({
                            url: 'http://localhost:3000/cart/' + good.id,
                            type: 'DELETE',
                            success: function () {
                                bilderCart();
                                cartIsEmpty();
                            }
                        })
                    }
                }
            })
        }

        function bilderCartButton(summ) {
            if (!$($cartList).children(".card_product__checkout")) {

            } else {
                var $cardTotalPriceLeft = $('<span/>').text('TOTAL');
                var $cardTotalPriceRight = $('<span/>').text(summ);
                var $cardTotalPrice = $('<div/>').addClass('card_product__totalPrice').append($cardTotalPriceLeft,
                $cardTotalPriceRight);
                var $cardButtonCheck = $('<a/>').addClass('card_product__checkout').text('checkout').attr('href', 'checkout.html');
                var $cardButtonShop = $('<a/>').addClass('card_product__toCard btn_empty_grey').text('Go to cart').attr('href', 'Shopping Cart.html');
                $($cartList).append($cardTotalPrice, $cardButtonCheck, $cardButtonShop);
            }
        }


        function countCartItem() {
            var $number = $('.number');
            $.ajax({
                url: 'http://localhost:3000/cart',
                type: 'GET',
                dataType: 'json',
                success: function (good) {
                    if (good.length === 0) {
                        $($number).hide();
                    } else {
                        $($number).text(good.length );
                    }

                },
                error: function () {
                    alert('Ошибка рендера количества товава в корзине');
                }
            });

        }

        bilderCatalog();


        function addToCart() {

            var good = $(this).data();

            if ($('#cart-' + good.id).length) {

                $.ajax({
                    url: 'http://localhost:3000/cart/' + good.id,
                    type: 'PATCH',
                    dataType: 'json',
                    data: {quantity: +good.quantity + 1},
                    success: function () {
                        console.log(good);
                        bilderCart();
                        countCartItem();
                    },
                    error: function () {
                        alert('Добавление не удалось');
                    }
                })
            } else {
                good.quantity = 1;
                $.ajax({
                    url: 'http://localhost:3000/cart',
                    type: 'POST',
                    dataType: 'json',
                    data: good,
                    success: function () {
                        bilderCart();
                    },
                    error: function () {
                        alert('Неудачная попытка добавить товар');
                    }
                })
            }
        }


        function cartIsEmpty() {
            $.ajax({
                url: 'http://localhost:3000/cart',
                type: 'GET',
                dataType: 'json',
                success: function (cart) {
                    if (cart.length < 1) {
                        var $divEmpty = $('<div/>').addClass('card_empty').text('Корзина пуста');
                        $($cartList).append($divEmpty);
                        bilderCartButton();
                        countCartItem();
                    } else {
                        bilderCart();
                    }
                }
            });
        }

        cartIsEmpty();

    });
})(jQuery);
