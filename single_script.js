(function ($) {
    var $carousel = $('#carousel');
    var $price = $('span.price');
    var $colorChoise = $('#color');
    var $sizeChoise = $('#size');
    var $quantityChoise = $('#QUANTITY');

    var $materialVal = $('#material');
    var $desingerVal = $('#manufacturer');
    var $singleAddButton = $('.singleAddButton');
    var $nameItem = $('#productName');
    var $collection = $('span.main_title');

    function getGoodsOption() {
        $.ajax({
            url: 'http://localhost:3000/goods/' + 1,
            type: 'GET',
            dataType: 'json',
            success: function (goods) {
                $($nameItem).text(goods.name);
                $($materialVal).text(goods.material);
                $($desingerVal).text(goods.manufacturer);
                $($price).text('$' + goods.price);
                $($collection).text(goods.collection);
                $($colorChoise).append($('<option/>', {
                    value: goods.color,
                    text: goods.color
                }));
                $($sizeChoise).append($('<option/>', {
                    value: goods.size,
                    text: goods.size
                }));
                $($singleAddButton).data(goods);

            }
        })
    }

    $($singleAddButton).click(addToCart);

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

                },
                error: function () {
                    alert('Добавление не удалось');
                }
            })
        } else {
            good.quantity = $quantityChoise.val();
            if ($quantityChoise.val() > '') {
                $.ajax({
                    url: 'http://localhost:3000/cart',
                    type: 'POST',
                    dataType: 'json',
                    data: good,
                    success: function () {
                        console.log();
                    },
                    error: function () {
                        alert('Неудачная попытка добавить товар');
                    }
                })
            }
        }
    }

    getGoodsOption();
})(jQuery);
