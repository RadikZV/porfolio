//       BURGER ============================
$(document).ready(function(){
    $('.header__burger').click(function(e){
        $('.menu-header, .header__burger-btn, .header__burger').toggleClass('active');
    });

    if($('.header__menu-item').click(function(e) {
        $('.menu-header, .header__burger-btn').removeClass('active');
    }));
});