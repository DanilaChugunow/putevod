// Modal image viewer logic
document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modalImgViewer');
	const modalImg = document.getElementById('modalImg');
	const modalClose = document.getElementById('modalClose');
	const zoomInBtn = document.getElementById('zoomIn');
	const zoomOutBtn = document.getElementById('zoomOut');
	let scale = 1;

	// Открытие модального окна по клику на фото
	// Открытие модального окна по клику на любое фото (кроме .noi)
	document.querySelectorAll('img:not(.noi)').forEach(img => {
		img.addEventListener('click', function () {
			modal.classList.add('active');
			modalImg.src = img.src;
			modalImg.style.transform = 'scale(1)';
			scale = 1;
		});
	});

	// Закрытие по крестику
	modalClose.addEventListener('click', function () {
		modal.classList.remove('active');
		modalImg.src = '';
	});

	// Зум
	zoomInBtn.addEventListener('click', function () {
		scale = Math.min(scale + 0.2, 4);
		modalImg.style.transform = `scale(${scale})`;
	});
	zoomOutBtn.addEventListener('click', function () {
		scale = Math.max(scale - 0.2, 0.5);
		modalImg.style.transform = `scale(${scale})`;
	});

	// Закрытие по клику вне картинки
	modal.addEventListener('click', function (e) {
		if (e.target === modal) {
			modal.classList.remove('active');
			modalImg.src = '';
		}
	});
});
// Slider logic
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
// Tabs logic
document.addEventListener('DOMContentLoaded', function () {
	const tabButtons = document.querySelectorAll('.tab-btn');
	const tabContents = document.querySelectorAll('.tab-content');

	tabButtons.forEach(btn => {
		btn.addEventListener('click', function () {
			// Remove active from all
			tabButtons.forEach(b => b.classList.remove('active'));
			tabContents.forEach(tc => tc.classList.remove('active'));
			// Add active to current
			btn.classList.add('active');
			const tabId = btn.getAttribute('data-tab');
			document.getElementById(tabId).classList.add('active');
		});
	});
});
