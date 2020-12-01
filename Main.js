
$('.menu-btn').on('click', function (e) { //Начало функции jquerry
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $(this).toggleClass('menu-btn-active');
    $('.content').toggleClass('content-active');
});
$('.menu-btn').on('click', function (e) {
    $('.cont').toggleClass('content-active'); //Для того чтобы страница не обновлялась при клике
});