$('.nav a').on('click', function(){
    var menu =  $('#menu');
    menu.attr('aria-expanded', false);
    menu.removeClass('in');
});

