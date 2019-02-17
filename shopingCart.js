(function ($) {
    $().ready(function () {
            var $productList = $('.product_list_row');
            var totalSumm = 0;

            function bilderShopCart() {
                $($productList).empty();
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
                            let $itemSerfColor = $('<div/>', {
                                class: 'product_specification',
                                text: 'Color:'
                            });
                            let $itemColorName = $('<div/>', {
                                class: 'specification_concern',
                                text: ' ' + item.color
                            });
                            let $itemSerf = $('<span/>', {
                                class: 'product_specification',
                                text: 'Size:'
                            });
                            let $itemSerfSize = $('<span/>', {
                                class: 'specification_concern',
                                text: ' ' + item.size
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
                                class: 'description_block_item action_button_groupe'
                            });
                            let $buttonDelete = $('<i/>', {
                                class: 'fas fa-times-circle',
                                title: 'Удалить',
                                data: item
                            }).click(deleteCardButton);
                            let $buttonAdd = $('<i/>', {
                                class: 'fas fa-plus-circle',
                                title: 'Увеличить',
                                data: item
                            }).click(addCartButton);
                            let $buttonMinus = $('<i/>', {
                                class: 'fas fa-minus-circle',
                                title: "Уменьшить",
                                data: item
                            }).click(minusItem);
                            $($productList).append($productItem);
                            $($productItem).append($pIleft, $pRight);
                            $($pIleft).append($itemImgDiv, $itemDesc);
                            $($itemImgDiv).append($itemImg);
                            $($itemDesc).append($itemDescName, $itemSerfColor, $itemSerf);
                            $($itemSerfColor).append($itemColorName);
                            $($itemSerf).append($itemSerfSize);
                            $($pRight).append($itemPrice, $itemCountDiv, $itemShipp, $itemSubTotal, $itemButtonGroup);
                            $($itemCountDiv).append($itemCount);
                            $($itemButtonGroup).append($buttonDelete, $buttonAdd,
                                $buttonMinus);
                            // total price all items in cart
                            totalSumm += +item.price * +item.quantity;

                            setTotalSumm(totalSumm);
                        });

                    }
                })
            }

            function setTotalSumm(totalSumm) {
                $('#subTotal').text('$' + totalSumm);
                $('#grandTotal').text('$' + totalSumm);
            }

        function deleteCardButton() {

            var good = $(this).data();
            $.ajax({
                url: 'http://localhost:3000/cart/' + good.id,
                type: 'DELETE',
                success: function () {
                    bilderShopCart();
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
                    bilderShopCart();
                    if(good.quantity < 2){
                        $.ajax({
                            url: 'http://localhost:3000/cart/' + good.id,
                            type: 'DELETE',
                            success: function () {
                                bilderShopCart();
                            }
                        })
                    }
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
                    bilderShopCart();
                }
            })
        }
            bilderShopCart();
        }
    );
})(jQuery);
