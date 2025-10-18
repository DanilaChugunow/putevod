document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burgerIcon');
    const burgerNav = document.getElementById('burgerNav');
    const closeBurger = document.getElementById('closeBurger');
    burgerIcon.addEventListener('click', function () {
        burgerNav.classList.add('open');
    });
    closeBurger.addEventListener('click', function () {
        burgerNav.classList.remove('open');
    });

    document.addEventListener('click', function (e) {
        if (!burgerNav || !burgerIcon) return;

        if (!burgerNav.classList.contains('open')) return;

        const clickedInsideNav = e.target.closest('#burgerNav');
        const clickedBurgerIcon = e.target.closest('#burgerIcon');
        if (!clickedInsideNav && !clickedBurgerIcon) {
            burgerNav.classList.remove('open');
        }
    });

    document.querySelectorAll('.burger-nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: 'smooth'
                });
                burgerNav.classList.remove('open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon540 = document.querySelector('.burger-icon540');
    const burgerNav540 = document.querySelector('.burger-nav540');
    const closeBurger540 = document.querySelector('.close-burger540');

    if (burgerIcon540 && burgerNav540 && closeBurger540) {
        burgerIcon540.addEventListener('click', function() {
            burgerNav540.classList.add('open');
        });

        closeBurger540.addEventListener('click', function() {
            burgerNav540.classList.remove('open');
        });

        document.addEventListener('click', function(e) {
            if (!burgerNav540.contains(e.target) && !burgerIcon540.contains(e.target)) {
                burgerNav540.classList.remove('open');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slider-btn.prev');
	const nextBtn = document.querySelector('.slider-btn.next');
	let current = 0;

	function showSlide(idx) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('active', i === idx);
		});
	}

	if (prevBtn && nextBtn) {
		prevBtn.addEventListener('click', function () {
			current = (current - 1 + slides.length) % slides.length;
			showSlide(current);
		});
		nextBtn.addEventListener('click', function () {
			current = (current + 1) % slides.length;
			showSlide(current);
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const tabButtons = document.querySelectorAll('.tab-btn');
	const tabContents = document.querySelectorAll('.tab-content');

	tabButtons.forEach(btn => {
		btn.addEventListener('click', function () {
			tabButtons.forEach(b => b.classList.remove('active'));
			tabContents.forEach(tc => tc.classList.remove('active'));
			btn.classList.add('active');
			const tabId = btn.getAttribute('data-tab');
			document.getElementById(tabId).classList.add('active');
		});
	});
});
