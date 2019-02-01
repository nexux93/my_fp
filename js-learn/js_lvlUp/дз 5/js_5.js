// удаление товара из корзины

$($cartList).on('click', '.card_item__delete', function () {

    var good = $(this).data();
    $.ajax({
        url: 'http://localhost:3000/cart/' + good.id,
        type: 'DELETE',
        success: function () {
            bilderCart();
        }
    })
});
