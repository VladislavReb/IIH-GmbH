// Home page, team animation.
function comePhotoBlocks (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.team_boss__info').style.animation = 'block 2s forwards';
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoBlocks2 (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.group_1').forEach(elem => {
                elem.style.animation = 'block_2 2s forwards';
            })
            observer.unobserve(entry.target);
        }
    });
}

function comePhotoBlocks3 (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.group_2').forEach(elem => {
                elem.style.animation = 'block_2 2s forwards';
            })
            observer.unobserve(entry.target);
        }
    });
}

const targetElem = document.querySelector('.team_boss');
const targetElem2 = document.querySelector('.empl_group_1');
const targetElem3 = document.querySelector('.empl_group_2');

const optionsRender = {
    root: null,
    threshold: 1,
};

const observerSecond = new IntersectionObserver(comePhotoBlocks, optionsRender);
const observerSecond2 = new IntersectionObserver(comePhotoBlocks2, optionsRender);
const observerSecond3 = new IntersectionObserver(comePhotoBlocks3, optionsRender);

observerSecond.observe(targetElem);
observerSecond2.observe(targetElem2);
observerSecond3.observe(targetElem3);