var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

const cloneSlide = $('.mySwiper2 .swiper-wrapper').html();
const arraySlide = [];

$('.mySwiper2 .swiper-slide').each(function (i, e) {
    arraySlide.push(e);
})

$('#color_container img').on('click', function () {
    const type = $(this).attr("data-id");
    $('.mySwiper2 .swiper-wrapper').empty();
    $(arraySlide).each(function (i, e) {
        const exist = $(e).attr('data-id').indexOf(type);
        if (exist >= 0) {
            $('.mySwiper2 .swiper-wrapper').prepend(e);
        }
        else{
            $('.mySwiper2 .swiper-wrapper').append(e);
        }
    });
    swiper2.slideTo(0);
});