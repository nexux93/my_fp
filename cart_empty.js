(function ($) {
    var $cartList = $('#card_list');
    function cartIsEmpty() {
            $.ajax({
                url: 'http://localhost:3000/cart',
                type: 'GET',
                dataType: 'json',
                success: function (cart) {
                    if (cart.length < 1) {
                        var $cardEmptyString = $('<div/>').addClass('card_empty').text('Корзина пуста');
                        $($cartList).append($cardEmptyString);

                    }
                }
            })
        }
    cartIsEmpty();
})(jQuery);
