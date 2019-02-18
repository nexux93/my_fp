$(function() {
    // подключение карусели
    $(".owl-carousel").owlCarousel({
        items: '1',
        loop: true,
        center:true,
        dots: false,
        autoWidth: true,
        navContainer: '#nav-carousel',
        navText: [
            // предыдущаяя
            "<div style='width: 50px;height: 50px; background-color: #d8d8d8;'><img src='img/ArrowPrew.svg' alt=''></div>",
            // следующаяя
            "<div style='width: 50px;height: 50px; background-color: #d8d8d8;'><img src='img/ArrowNext.svg' alt=''></div>",
        ]
    });
});
