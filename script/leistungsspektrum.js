// Home page, leistungsspektrum animation.
function comePhotoBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.service_left').style.animation = 'block_2 1.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoBlocks2 (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.service_right').style.animation = 'block 1.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoBlocks3 (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.service_left_2').style.animation = 'block_2 1.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoBlocks4 (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.service_right_2').style.animation = 'block 1.5s forwards';
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.wrap_1');
const targetElem2 = document.querySelector('.wrap_2');
const targetElem3 = document.querySelector('.wrap_3');
const targetElem4 = document.querySelector('.wrap_4');

const optionsRender = {
    root: null,
    threshold: 0,
};

const observerSecond = new IntersectionObserver(comePhotoBlocks, optionsRender);
const observerSecond2 = new IntersectionObserver(comePhotoBlocks2, optionsRender);
const observerSecond3 = new IntersectionObserver(comePhotoBlocks3, optionsRender);
const observerSecond4 = new IntersectionObserver(comePhotoBlocks4, optionsRender);

observerSecond.observe(targetElem);
observerSecond2.observe(targetElem2);
observerSecond3.observe(targetElem3);
observerSecond4.observe(targetElem4);