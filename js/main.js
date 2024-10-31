$(function(){
       $('.scroll-to-order').click(function(e){e.preventDefault(); $('html,body').animate({scrollTop: $('a[name="order_form"]').offset().top},'slow')});
});