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
                        var $catalogAddHref = $('<span/>').addClass('block_add_hover_text').data(item).attr('id', 'card-' + item.id).text('Add to cart');

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
                        var $cardDescCount = $('<span/>').addClass('card_desc__count').text(item.quantity);
                        var $cardDescSumm = $('<span/>').addClass('card_desc__summ');
                        // button delete
                        var $cardDeleteButton = $('<i/>').addClass('fas fa-times-circle').click(deleteCardButton).data(item);
                        // button add
                        var $cardAddButton = $('<i/>').addClass('fas fa-plus-circle').attr('id', 'cart-' + item.id).click(addCartButton).data(item);

                        var $cardDescPrice = $('<div/>').addClass('card_desc__price').append($cardDescCount, $cardDescSumm);
                        var $cardDelete = $('<div/>').addClass('card_item__delete').append($cardDeleteButton, $cardAddButton);
                        var $cardImgItem = $('<img alt="" src="">').attr('src', item.imgSmall);
                        var $cardDesc = $('<div/>').addClass('card_item__desc card_desc').append($cardDescName,
                            $cardDescRespect,
                            $cardDescPrice);
                        var $cardImg = $('<div/>').addClass('card_item__img').append($cardImgItem);
                        var $cardProduct = $('<div/>').addClass('card_product__item card_item').append($cardImg,
                            $cardDesc,
                            $cardDelete);

                        $($cartList).append($cardProduct, $cardSeparator);
                        bilderCartButton();
                    })
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

        function bilderCartButton() {
            if ($($cartList).children(".card_product__checkout")) {

            } else {
                var $cardButtonCheck = $('<a/>').addClass('card_product__checkout').text('checkout').attr('href', 'checkout.html');
                var $cardButtonShop = $('<a/>').addClass('card_product__toCard btn_empty_grey').text('Go to cart').attr('href', '#');
                $($cartList).append($cardButtonCheck, $cardButtonShop);
            }
        }


        bilderCatalog();

        $catalItem.on('click', '.block_add_hover_text', function () {

            var good = $(this).data();

            if ($('#cart-1').length > 0) {
                var goodIncart = $('#cart-' + good.id).data();

                $.ajax({
                    url: 'http://localhost:3000/cart/' + good.id,
                    type: 'PATCH',
                    dataType: 'json',
                    data: {quantity: +goodIncart.quantity + 1},
                    success: function () {
                        bilderCart();
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
                    }
                })
            }
        });


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
                    } else {
                        bilderCart();
                    }
                }
            });
        }

        cartIsEmpty();

    });
})(jQuery);
