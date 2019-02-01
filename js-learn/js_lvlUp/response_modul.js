(function ($) {

    var $responseList = $('.response');
    var $buttonSub = $('#submit');
    //add new response
$($buttonSub).click(function() {
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
        error: function (){
            alert('Произошлой не предвиденный сбой');
        }
    })
});

// render all response
$('#refresh').click(function () {
    $.ajax({
        url: 'http://localhost:3000/response',
        type: "GET",
        success: function (resp) {
            var $ul = $('<ul>');

            resp.forEach(function(resp){
                var $li = $('<li/>').text(resp.user + '(' + resp.response + ')');
                $($ul).append($li);
            });

            $('.response').append($ul);

        }
    })
})
})(jQuery);
