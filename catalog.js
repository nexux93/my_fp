(function ($) {
    $().ready(function () {
            var $catalItem = $('#catalogLog');
            var $slider = $('#filter-var');
            var itemPrice = [];

            function bilderCatalog() {
                $.ajax({
                    url: ' http://localhost:3000/goods',
                    type: 'GET',
                    dataType: 'json',
                    success: function (goods) {
                        goods.forEach(function (item) {

                            var $catalogItemName = $('<span/>').addClass('item_text').text(item.name);
                            var $catalogItemImgTag = $('<img alt="" src="">').attr('src', item.imgBig);
                            var $catalogItemImg = $('<div/>').addClass('item_img');
                            var $catalogItemPrice = $('<span/>').addClass('item_text item_span').text('$ ' + item.price);
                            var $catalogBlock = $('<div/>').addClass('item_block');

                            itemPrice.push(item.price);

                            $($catalItem).append($catalogBlock);
                            $($catalogBlock).append($catalogItemImg.append($catalogItemImgTag), $catalogItemName, $catalogItemPrice);

                        });

                    }
                })
            }


            bilderCatalog();

            $($slider).slider({
                values: [1, 200],
                range: true
            });
        }
    );
})(jQuery);
