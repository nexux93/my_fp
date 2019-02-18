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
            "<div style='width: 50px;height: 50px; background-color: #5d5b5b;'><img src='img/ArrowPrew.svg' alt=''></div>",
            // следующаяя
            "<div style='width: 50px;height: 50px; background-color: #5d5b5b;'><img src='img/ArrowNext.svg' alt=''></div>",
        ]
    });
});
