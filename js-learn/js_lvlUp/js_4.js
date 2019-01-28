(function ($) {
    $().ready(function () {
        $('ul li').click('li:not(.active)', function () {
$(this).addClass('active');
var  t = $(this).siblings().removeClass('active');

        });

    });
})(jQuery);
