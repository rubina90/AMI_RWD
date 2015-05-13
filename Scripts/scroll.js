function scrollToAnchor(aid){
    var aTag = $(aid);
    $('html,body').animate({scrollTop: aTag.offset().top - 80},'slow');
}

$(".scroll-link").click(function() {
 var href = $(this).attr('href');
 scrollToAnchor(href);
});