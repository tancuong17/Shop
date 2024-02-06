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
    let index = 0;
    let id_color_choose = $(this).attr("data-id");
    $(arraySlide).each(function (i, e) {
        if($(e).attr('data-id') == id_color_choose){
            index = i;
        }
    });
    swiper2.slideTo(index);
});