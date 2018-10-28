$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 0){
            $('.navbar').addClass('scrollNav');
        }else if(scrollTop == 0){
            $('.navbar').removeClass('scrollNav');
        } 
    });
    $(backToTop).scroll(function(){
        $('body,html').animate({
            scrollTop:0},800);
        });
});