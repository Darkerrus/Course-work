
// Просто оставь как есть, тут идёт замена классов при событии;
$('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $(this).toggleClass('menu-btn-active');
    $('.content').toggleClass('content-active');
});
$('.menu-btn').on('click', function (e) {
    $('.cont').toggleClass('content-active');
});