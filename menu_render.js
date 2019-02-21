(function ($) {
    $().ready(function () {
        var $mList = $('.menu_list');

        $($mList).mouseover(function () {
//удаляем flex у всех потомков Menu
            $('#Menu li').find('.mega_menu_container').removeClass('flex');
            // добавляем контекстному потомку класс flex
            $(this).parent().children('.mega_menu_container').addClass('flex');

        });

    });
})(jQuery);
