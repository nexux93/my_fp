(function ($) {
    $().ready(function () {
        var $mList = $('.menu_list');

        $($mList).mouseover(function () {
            // console.log(e);
  $('#Menu li').find('.mega_menu_container').removeClass('flex');
            $(this).parent().children('.mega_menu_container').addClass('flex');

        });
    });
})(jQuery);
