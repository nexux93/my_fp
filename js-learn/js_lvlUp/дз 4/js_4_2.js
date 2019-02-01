window.onload = function () {
    var name = document.getElementById('name');
    var tel = document.getElementById('tel');
    var email = document.getElementById('email');
    var text = document.getElementById('text');
    var town = document.getElementById('town');
    var butt = document.getElementById('submit');


    butt.addEventListener("click", getValidate);


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
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'js_lvlUp/planet_list.json');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var catchCity = JSON.parse(xhr.responseText);

            catchCity.forEach(function (catchCity) {
                var opt = document.createElement('option');
                opt.value = catchCity.planet;
                opt.textContent = catchCity.planet;

                town.appendChild(opt);

            })
        }
    };
};
