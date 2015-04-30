$(document).ready(function(){
    var slideView = $('.bigImage');
    var slideWidth = parseInt(slideView.css('width'));
    var slideStep = slideWidth/5;

    $('#but').click(function(){
        var slidePos = parseInt(slideView.css('left'));
        var newPos = slidePos - slideStep;
        if (newPos == -slideWidth){
            newPos = 0;
        }
        slideView.css('left',newPos);
    })
})
