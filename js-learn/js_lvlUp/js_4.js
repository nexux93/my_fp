(function ($) {
    $().ready(function () {
        $('.tabs').on('click', 'li:not(.active)', function () {
            var action = $(this).data('action');
            switch (action) {
                case '1':
                    $(this).addClass('active').sibling().remove('.active');
                    break;
                case '2':
                    $(this).addClass('active').sibling().remove('.active');
                    break;
                case '3':
                    $(this).addClass('active').sibling().remove('.active');
                    break;
                case '4':
                    $(this).addClass('active').sibling().remove('.active');
                    break;
                default:
                    console.log('мимо');
            }

            $().addClass('active').sibling().remove('.active');
        })

    });
})(jQuery);
