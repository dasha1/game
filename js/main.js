$(document).ready(function(){
    var  interv;
    var score=0;
    $('.start').click(function () {
        score=0;
        $('.score').text("Всего пингвинов:"+score);
         interv = setInterval(function () {
             $('div').removeClass('active');
             var randNum = Math.floor((Math.random() * 6) + 1);
             var id = document.getElementById(randNum);
             $(id).addClass('active');
         },900);
    });
    $(document).on('click','.active',function () {
        score++;
        $('.score').text("Всего пингвинов:"+score);
        $('div').removeClass('active');
    });
    $('.stop').click(function () {
        $('div').removeClass('active');
        clearInterval(interv);
        $("<p> Предыдущий рекорд:"+score+"</p>").insertAfter('.score');
    });
    $('.title').toggle('bounce',{times:2},3000);
});