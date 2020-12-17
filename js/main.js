(function ($) {
    $(document).ready(function () {

        var external = new Swiper('.swiper-container-ext', {
            direction: 'vertical',
            allowTouchMove: false,
            scrollbar: {
                draggable: false,
            },
            navigation: false
        });

        var internal = new Swiper('.swiper-container-inn', {
            direction: 'vertical',
            nested: true,
            allowTouchMove: false,
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            },
        });

        $('.ext-next-slide').click(function (e){
            e.preventDefault();
            external.slideTo(1)
        })
        $('.ext-start-slide').click(function (e){
            e.preventDefault();
            external.slideTo(0)
            internal.slideTo(0)
        })

        $(document).on('click','.btn-prev.swiper-button-disabled', function (e){
            e.preventDefault();
            external.slideTo(0)
        })

        $(document).on('click','.btn-next.swiper-button-disabled', function (e){
            e.preventDefault();
            external.slideTo(2)
        })

    });
})(jQuery);
