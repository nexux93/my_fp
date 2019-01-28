(function ($) {
    $().ready(function () {
        $('ul li').click('li:not(.active)', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var t = $(this).index();
            var v = $('.global-content').children().get(t);
            $(v).addClass('active').siblings().removeClass('active');

        });

    });
})(jQuery);
