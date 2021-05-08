$(function(){
    var $wWidth= $(window).width();
    if($wWidth<=960){
        /*console.log($wWidth);*/
        $("#event #container #row").addClass("swiper-container");
        $(".event").addClass("swiper-wrapper");
        $(".event>figure").addClass("swiper-slide");
        var swiper = new Swiper('.swiper-container',{
            slidesPerView: 1,
            spaceBetween: 2+"%",
            loop: true,
            autoplay:{
                delay: 5000
            },
        });
    }
    var swiper = new Swiper('.first',{
        direction:'vertical',
        loop: true,
        slidesPerView: 1,
        speed: 800,
        autoplay:{
            delay: 5000
        },
    });
})