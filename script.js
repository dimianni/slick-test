


$(document).ready(function () {


    const activateSlick = function () {

        if ($(window).width() < 713) {
            $('.parent').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 500,
                        settings: "unslick"
                    }
                ]
            });
        } else {
            $('.parent').slick("unslick");
        }

    }

    $(window).on("resize", activateSlick)
   

    activateSlick()

    
});