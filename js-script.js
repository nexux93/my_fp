(function ($) {
    $().ready(function () {
        $('#card img').on('click', function (event) {

            var target = $(event.target);

            if (target.is('#card img')) {
                $('#card_list').fadeToggle('fast', 'linear');
            }

        }).hover(function () {
            $(this).attr('src', 'img/Forma_hover.svg');

        }, function () {
            $(this).attr('src', 'img/Forma_1.svg');
        });
        $('ul.menu').hover()
    });

})(jQuery);
