
$('.menu-btn').on('click', function (e) { //Начало функции jquerry
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $(this).toggleClass('menu-btn-active');
    $('.content').toggleClass('content-active');
});
$('.menu-btn').on('click', function (e) {
    $('.cont').toggleClass('content-active'); //Для того чтобы страница не обновлялась при клике
});

var a = false;
let inp1 = document.getElementById("inp1");
inp1.oninput = handleInput1;
function handleInput1(e) 
    {
        if (e.target.value != null & e.target.value != 0)
        {
            a = true;
        }
                
}
a1.onclick = function(e){
    if(e.target.id == 'a1' & a == true){
       alert("Вы подписались")
    }
    else 
    {
        alert("Введите данные")
    }
}


var b = false;
let inp2 = document.getElementById("inp2");
inp2.oninput = handleInput2;
function handleInput2(e) {
        if (e.target.value != null & e.target.value != 0)
        {
            b = true;
        }
                
}

a2.onclick = function(e){
    if(e.target.id == 'a2' & b == true){
       alert("Вы подписались")
    }
    else 
    {
        alert("Введите данные")
    }
}