(function ($) {
let name = $('#names');
var tel = $('#tel');
var email = $('#email');
var text = $('#text');
var butt = $('#submit').click(getValidate);
var nameReg = /^[a-zа-яё]+$/i;
var emailReg  = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}/;
var telReg = /\+\d\(\d\d\d\)\d\d\d\-\d\d\d\d/g;

function getValidate() {
    if (nameReg.test(name.val())) {
        if (name.attr('class') == 'denied') {
            name.removeClass('denied')
        }
        name.addClass('sucsess');
        console.log('Имя прошло валидацию');
    } else {
        if (name.attr('class') == 'sucsess') {
            name.removeClass('sucsess')
        }
        name.textContent = 'не верно';
        name.addClass('denied');
    }

    if (telReg.test(tel.val())) {
        if (tel.attr('class') == 'denied') {
            tel.removeClass('denied')
        }
        tel.textContent = 'верно';
        tel.addClass('sucsess');
        console.log('Телефон прошёл валидацию');
    } else {
        if (tel.attr('class') == 'sucsess') {
            tel.removeClass('sucsess')
        }
        tel.textContent = 'не верно';
        tel.addClass('denied');
    }

    if (emailReg.test(email.val())) {
        if (email.attr('class') == 'denied') {
            email.removeClass('denied');
        }
        email.addClass('sucsess');
        console.log('Email прошёл валидацию');
    } else {
        if (email.attr('class') == 'sucsess') {
            email.removeClass('sucsess')
        }
        email.addClass('denied');
    }
}

    $('#birthday').datepicker({
        buttonText: "Календарь",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        dayNames: [
            "пн",
            "вт",
            "ср",
            "чт",
            "пт",
            "сб",
            "вс"
        ]
    });


})(jQuery);
