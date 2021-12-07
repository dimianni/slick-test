


$(document).ready(function () {


    const activateSlick = function () {
        if ($(window).width() < 713) {
            $('.parent').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
    }

    $(window).on("resize", activateSlick)
   

    

    activateSlick()

    
});