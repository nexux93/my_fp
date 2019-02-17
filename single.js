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
            "<img src='img/ArrowPrew.svg' alt=''>",
            // следующаяя
            "<img src='img/ArrowNext.svg' alt=''>",
        ]
    });
});