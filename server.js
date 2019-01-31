(function ($) {
    $().ready(function () {
        var $catItem = $('#catalog-item');
        var $cartList = $('#card_list');

        function bilderCatalog() {
            $.ajax({
                url: ' http://localhost:3000/goods',
                type: 'GET',
                dataType: 'json',
                success: function (goods) {
                    goods.forEach(function (item) {
                        var $catalogAddHref = $('<a/>').addClass('block_add_hover_text').attr('href', '#').data(item).text('Add to cart');
                        var $catalogAddImg = $('<img alt="" src="img/add_img.svg">');
                        var $catalogAddItem = $('<div/>').addClass('add_item');
                        var $catalogAddBlock = $('<div/>').addClass('block_add');
                        var $catalogItemName = $('<span/>').addClass('item_text').text(item.name);
                        var $catalogItemImgTag = $('<img alt="" src="">').attr('src', item.imgBig);
                        var $catalogItemImg = $('<div/>').addClass('item_img');
                        var $catalogItemPrice = $('<span/>').addClass('item_text item_span').text('$ ' + item.price);
                        var $catalogBlock = $('<div/>').addClass('item_block');

                        $($catItem).append($catalogBlock);
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

        }



        function bilderCartButton() {
            var $cardButtonCheck = $('<a/>').addClass('card_product__checkout').text('checkout').attr('href', 'checkout.html');
            var $cardButtonShop = $('<a/>').addClass('card_product__toCard btn_empty_grey').text('Go to cart').attr('href', '#');
            $($cartList).append($cardButtonCheck, $cardButtonShop);
        }
        bilderCartButton();
        bilderCatalog();
    });

})(jQuery);
