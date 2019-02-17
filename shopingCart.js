(function ($) {
    $().ready(function () {
            var $productList = $('.product_list_row');

            function bilderShopCart() {
                $.ajax({
                    url: ' http://localhost:3000/cart',
                    type: 'GET',
                    dataType: 'json',
                    success: function (cart) {
                        cart.forEach(function (item) {
                            let $productItem = $('<div/>', {
                                class: 'product_list_item'
                            });
                            let $pIleft = $('<div/>', {
                                class: 'product_list_item_left'
                            });
                            let $itemImgDiv = $('<div/>');
                            let $itemImg = $('<img>', {
                                src: item.spCartImg
                            });
                            let $itemDesc = $('<div/>', {
                                class: 'product_list_item_description'
                            }).addClass();
                            let $itemDescName = $('<span/>', {
                                class: 'product_name',
                                text: item.name
                            });
                            let $itemSerf = $('<span/>', {
                                class: 'product_specification',
                                text: 'Size: '
                            });
                            let $itemSerfSize = $('<span/>', {
                                class: 'specification_concern',
                                text: item.size
                            });
                            let $pRight = $('<div/>', {
                                class: 'product_list_item_right',
                            });
                            let $itemPrice = $('<div/>', {
                                class: 'description_block_item',
                                text: '$' + item.price
                            });
                            let $itemCountDiv = $('<div/>', {
                                class: 'description_block_item'
                            });
                            let $itemCount = $('<input/>', {
                                class: 'product_price_input',
                                type: 'number',
                                disabled: 'disabled',
                                value: item.quantity
                            });
                            let $itemShipp = $('<div/>', {
                                class: 'description_block_item',
                                text: item.delivery
                            });
                            let $itemSubTotal = $('<div/>', {
                                class: 'description_block_item',
                                text: '$' + +item.price * +item.quantity
                            });
                            let $itemButtonGroup = $('<div/>', {
                                class: 'description_block_item'
                            });
                            let $buttonDelete = $('<i/>', {
                                class: 'fas fa-times-circle'
                            });
                            $($productList).append($productItem);
                            $($productItem).append($pIleft, $pRight);
                            $($pIleft).append($itemImgDiv, $itemDesc);
                            $($itemImgDiv).append($itemImg);
                            $($itemDesc).append($itemDescName, $itemSerf);
                            $($itemSerf).append($itemSerfSize);
                            $($pRight).append($itemPrice, $itemCountDiv, $itemShipp, $itemSubTotal, $itemButtonGroup);
                            $($itemCountDiv).append($itemCount);
                            $($itemButtonGroup).append($buttonDelete);


                        });

                    }
                })
            }


            bilderShopCart();
        }
    );
})(jQuery);
