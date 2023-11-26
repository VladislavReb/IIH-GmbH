// Home page, branchen animation.
function comePhotoBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.part1').style.animation = 'block 2.5s forwards';
            document.querySelector('.part2').style.animation = 'block_2 2.5s forwards';
            document.querySelector('.part3').style.animation = 'block 2.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.thi_sect__title');
const optionsRender = {
    root: null,
    threshold: 0,
};

const observerSecond = new IntersectionObserver(comePhotoBlocks, optionsRender);

observerSecond.observe(targetElem);


// Slider library logic.
$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: 0,
        variableWidth: true,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 412,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    });
});