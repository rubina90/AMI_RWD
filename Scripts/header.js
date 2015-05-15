$('.nav a').on('click', function(){
    var menu =  $('#bs-example-navbar-collapse-1');
    menu.attr('aria-expanded', false);
    menu.removeClass('in');
});