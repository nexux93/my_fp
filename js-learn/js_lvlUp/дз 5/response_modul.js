(function ($) {

    var $responseList = $('.response');
    var $buttonSub = $('#submit');
    //add new response
    $($buttonSub).click(function () {
        var $nameInput = $('#name').val();
        var $textInput = $('#text').val();
        $.ajax({
            url: 'http://localhost:3000/response',
            type: "POST",
            dataType: 'json',
            data: {
                user: $nameInput,
                response: $textInput
            },
            success: function () {
                alert('ваш отзыв отправлен на модерацию');
            },
            error: function () {
                alert('Произошёл не предвиденный сбой');
            }
        })
    });

// render all response
    $('#refresh').click(getResponse);

    function getResponse() {
        $('.response').empty();
        $.ajax({
            url: 'http://localhost:3000/response',
            type: "GET",
            success: function (resp) {
                var $ul = $('<ul>');

                resp.forEach(function (resp) {
                    var $li = $('<li/>').text(resp.user + '(' + resp.response + ')');
                    var $butt = $('<button/>').data(resp).addClass('Success').text('Одобрить').click(approvedResponse);
                    var $dellResp = $('<button/>').data(resp).addClass('delete').text('Удалить').click(deleteResponse);
                    $($li).append($butt);
                    $($li).append($dellResp);
                    $($ul).append($li);
                });

                $('.response').append($ul);

            }
        })
    }


    function deleteResponse() {
        var resp = $(this).data();

        $.ajax({
            url: 'http://localhost:3000/response/' + resp.id,
            type: 'DELETE',
            success: function() {
                alert('Отзыв № ' +resp.id + ' удалён');
                getResponse();
            },
            error: function () {
                alert('Ошибка удаления отзыва');
            }
        })
    }
function approvedResponse() {
        console.log(111);
        var resp = $(this).data();

        $.ajax({
            url: 'http://localhost:3000/response/' + resp.id,
            type: 'PATCH',
            dataType: 'json',
            data: {moder: "approved"},
            success: function () {
                alert('Отзыв одобрен');
            },
            error: function () {
                alert('Внутренняя ошибка');
            }
        })

    }

    getResponse();
})(jQuery);
