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
			// Убираем активные классы
			tabButtons.forEach(b => b.classList.remove('active'));
			tabContents.forEach(tc => {
				tc.classList.remove('active');
				tc.style.animation = 'none';
			});
			
			// Добавляем активный класс кнопке
			btn.classList.add('active');
			
			// Находим нужный контент
			const tabId = btn.getAttribute('data-tab');
			const targetContent = document.getElementById(tabId);
			
			// Принудительный рефлоу для сброса анимации
			targetContent.offsetHeight;
			
			// Добавляем активный класс с небольшой задержкой
			setTimeout(() => {
				targetContent.classList.add('active');
			}, 10);
		});
	});
});

// Анимации при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Добавляем классы анимации к элементам
    const animatedElements = document.querySelectorAll('.information, .video-section, .slider-section, .tabs, footer');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Анимации для подэлементов
    const subElements = document.querySelectorAll('.hist, .put, .slide-photos, .tab-content');
    subElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });
});

// Улучшенные анимации для слайдера
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            // Убираем все классы состояний
            slide.classList.remove('active', 'prev', 'next');
            
            if (i === idx) {
                // Активный слайд
                slide.classList.add('active');
                slide.style.animation = 'slideInFromRight 0.8s ease-out';
            } else if (i === idx - 1 || (idx === 0 && i === slides.length - 1)) {
                // Предыдущий слайд
                slide.classList.add('prev');
            } else if (i === idx + 1 || (idx === slides.length - 1 && i === 0)) {
                // Следующий слайд
                slide.classList.add('next');
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function () {
            current = (current - 1 + slides.length) % slides.length;
            showSlideWithDirection(current, 'left');
        });
        nextBtn.addEventListener('click', function () {
            current = (current + 1) % slides.length;
            showSlideWithDirection(current, 'right');
        });
    }
    
    function showSlideWithDirection(idx, direction) {
        slides.forEach((slide, i) => {
            // Убираем все классы и анимации
            slide.classList.remove('active', 'slide-in-left', 'slide-in-right');
            slide.style.animation = 'none';
            
            if (i === idx) {
                // Активный слайд
                slide.classList.add('active');
                
                // Принудительный рефлоу для сброса анимации
                slide.offsetHeight;
                
                // Добавляем анимацию через inline стили
                setTimeout(() => {
                    if (direction === 'left') {
                        slide.style.animation = 'slideInFromLeft 0.8s ease-out';
                    } else {
                        slide.style.animation = 'slideInFromRight 0.8s ease-out';
                    }
                }, 10);
            }
        });
    }
});

// Плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Анимация загрузки страницы
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
