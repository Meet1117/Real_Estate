document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', () => {
        navLinks.classList.add('show');
        closeBtn.classList.add('show');
        hamburger.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('show');
        closeBtn.classList.remove('show');
        hamburger.style.display = 'block';
    });
});

 // Scroll to Top functionality
 document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    progressCircle.style.setProperty("--progress", 1 - progress);
                    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                }
            }
        });


        // information counting
        document.addEventListener('DOMContentLoaded', () => {
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        
            function countUp(el) {
                const target = +el.getAttribute('data-count');
                const speed = 100; // Adjust speed here
                const increment = target / speed;
                let count = 0;
        
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        el.innerText = Math.ceil(count);
                        setTimeout(updateCount, 20); // Adjust delay here
                    } else {
                        el.innerText = target;
                    }
                };
        
                updateCount();
            }
        
            const counters = document.querySelectorAll('.count');
            let started = false;
        
            window.addEventListener('scroll', () => {
                const section = document.getElementById('details');
                if (isElementInViewport(section) && !started) {
                    counters.forEach(counter => countUp(counter));
                    started = true;
                }
            });
        });


        document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const body = document.querySelector('body');

    loginBtn.addEventListener('click', () => {
        loginPopup.style.display = 'flex';
        body.classList.add('blur');
    });

    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
        body.classList.remove('blur');
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginPopup) {
            loginPopup.style.display = 'none';
            body.classList.remove('blur');
        }
    });
});