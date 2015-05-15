function scrollToAnchor(aid){
    var aTag = $(aid);
    $('html,body').animate({scrollTop: aTag.offset().top - 75},'slow');
}

$(".scroll-link").click(function() {
 var href = $(this).attr('href');
 scrollToAnchor(href);
});