// Scroll Reveal
const sr = ScrollReveal({
    distance: '25px',
    duration: 2500
});

sr.reveal(`.card-hourly, .about-txt, .testimonial-1`, {
    origin: 'left'
})

sr.reveal(``, {
    origin: 'bottom'
})

sr.reveal(`.card-sleepovers, .testimonial-2`, {
    origin: 'right'
})

sr.reveal(`.scroll-more`, {
    origin: 'bottom',
    interval: 250
})

sr.reveal(`.bb-img, .card-daycare`, {
    origin: 'top'
})

sr.reveal(``, {
    origin: 'bottom',
    interval: 250
})


const sections = document.querySelectorAll('section')
const navLink = document.querySelectorAll('.nav-item a')
const navItem = document.querySelectorAll('.nav-item')
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navItems = document.querySelector('.nav-items');
const body = document.querySelector('.body');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop / 1.5)) {
            current = section.getAttribute('id');
        }
    })

    navLink.forEach(link => {
        link.classList.remove('current');
        if (link.classList.contains(current)) {
            link.classList.add('current');
        }
    })
})

openMenu.addEventListener('click', () => {
    navItems.style.display = 'flex';
    body.style.overflow = 'hidden';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'initial';
})

closeMenu.addEventListener('click', () => {
    navItems.style.display = 'none';
    body.style.overflow = 'scroll';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'initial';
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navItems.style.display = 'none';
        body.style.overflow = 'scroll';
        closeMenu.style.display = 'none';
        openMenu.style.display = 'initial';
    })
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav').style.top = "0";
    } else {
        document.getElementById('nav').style.top = "-85px";
    }
    prevScrollpos = currentScrollPos;
}

$('.gallery-images').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});

