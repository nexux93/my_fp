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
        $('ul.menu').hover();

        // checkout page script
        // radiobutton check
        $('#check1').click(function () {
            $(this).children().addClass('check-active');
            $('#check2').children().removeClass('check-active');
        });
        $('#check2').click(function () {
            $(this).children().addClass('check-active');
            $('#check1').children().removeClass('check-active');
        });
        // show and hide content in .check_list__container
        $('.list_left__next').click(function () {
            $(this).parent().parent().toggle('drop').parent().next().children('.check_list__container').toggle('drop');
        });
        $('.list_left__back').click(function () {
            $(this).parent().parent().toggle('drop').parent().prev().children('.check_list__container').toggle('drop');
        });
    });

})(jQuery);
