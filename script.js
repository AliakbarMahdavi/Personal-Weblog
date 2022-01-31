let aboutOffset = $(".about-me").offset().top;
function about() {
    $('html').animate({
        scrollTop : aboutOffset
    },500,"linear")
}

$('#click-scroll').click(function () {
    $("html").animate({
        scrollTop: 0
    },500,"linear")
})

$(document).scroll(function () {
    let scrollT = $(document).scrollTop();
    if (scrollT > 900){
        $('#click-scroll').fadeIn(200)
    }else {
        $('#click-scroll').fadeOut(200)
    }
})

let servicesOffset = $('#services').offset().top+100;
function services() {
    $('html').animate({
        scrollTop:servicesOffset
    },500,"linear")
}

let workContainerOffset = $('.work').offset().top+130;
function work() {
    $('html').animate({
        scrollTop:workContainerOffset
    },500,"linear")
}

let commentOffset = $('#comment').offset().top+70;
function comment() {
    $('html').animate({
        scrollTop:commentOffset
    },500,"linear")
}

let contentOffset = $("#content").offset().top + 150;
function content() {
    $('html').animate({
        scrollTop:contentOffset
    },700,"linear")
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});