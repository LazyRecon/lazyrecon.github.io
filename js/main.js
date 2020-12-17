(function ($) {
    $(document).ready(function () {

        var external = new Swiper('.swiper-container-ext', {
            direction: 'vertical',
            allowTouchMove: false,
            scrollbar: {
                draggable: false,
            },
            on:{
                slideChange: function (swiper){
                    if(swiper.activeIndex === 1){
                        $('.btn-prev.swiper-button-disabled').on('click', gotostart)
                    }
                }
            }
        });

        var internal = new Swiper('.swiper-container-inn', {
            direction: 'vertical',
            nested: true,
            allowTouchMove: false,
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            },
            on: {
                slideChange: function (swiper){
                    if(swiper.activeIndex === 0){
                        $('.btn-prev.swiper-button-disabled').on('click', gotostart)
                    }
                    if(swiper.activeIndex === swiper.slides.length - 1){
                        $('.btn-next.swiper-button-disabled').on('click', gotoend)
                    }
                    if(swiper.activeIndex > 0 && swiper.activeIndex < swiper.slides.length - 1){
                        $('.btn-prev').off('click', gotostart)
                        $('.btn-next').off('click', gotoend)
                    }
                }
            }
        });


        $('.ext-next-slide').click(function (e) {
            e.preventDefault();
            external.slideTo(1)
        })

        $('.ext-start-slide').click(function (e) {
            e.preventDefault();
            external.slideTo(0)
            internal.slideTo(0)
        })

        var gotostart = function (){
            external.slideTo(0)
        }
        var gotoend = function () {
            external.slideTo(2)
        }

    });
})(jQuery);
