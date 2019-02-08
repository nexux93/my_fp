(function ($) {

var name = $('#name');
var tel = $('#tel');
var email = $('#email');
var text = $('#text');
var town = $('#town');

var butt = $('#submit').click(getValidate);

    $('#birthday').datepicker({
        buttonText: "Календарь",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
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
        ]
    });

function getValidate() {
    if (/^[a-zа-яё]+$/i.test(name.value) == true) {
        if (name.classList == 'denied') {
            name.classList.remove('denied')
        }
        name.textContent = 'верно';
        name.classList.add('sucsess');

        console.log('Имя прошло валидацию');
    } else {
        if (name.classList == 'sucsess') {
            name.classList.remove('sucsess')
        }
        name.textContent = 'не верно';
        name.classList.add('denied');
    }

    if (/\+\d\(\d\d\d\)\d\d\d\-\d\d\d\d/g.test(tel.value) == true) {
        if (tel.classList == 'denied') {
            tel.classList.remove('denied')
        }
        tel.textContent = 'верно';
        tel.classList.add('sucsess');
        console.log('Телефон прошёл валидацию');
    } else {
        if (tel.classList == 'sucsess') {
            tel.classList.remove('sucsess')
        }
        tel.textContent = 'не верно';
        tel.classList.add('denied');
    }

    if (/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}/.test(email.value) == true) {
        if (email.classList == 'denied') {
            email.classList.remove('denied')
        }
        email.classList.add('sucsess');
        console.log('Email прошёл валидацию');
    } else {
        if (email.classList == 'sucsess') {
            email.classList.remove('sucsess')
        }
        email.classList.add('denied');
    }


}
})(jQuery);
