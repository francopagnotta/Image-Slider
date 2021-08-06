
// MANUAL
function slider() {
	const prevBtn = document.querySelector('.btn__back');
	const nextBtn = document.querySelector('.btn__next');
	const slides = document.querySelectorAll('.slider__slide');
	
	let i = 0;
	
	document.addEventListener('click', (e)=> {
		
		if (e.target === prevBtn) {
			e.preventDefault();
			
			slides[i].classList.remove('active');
			
			i--;
			
			if (i < 0) i = slides.length - 1;
			
			slides[i].classList.add('active');
		}

		else if (e.target === nextBtn) {
			e.preventDefault();
			
			slides[i].classList.remove('active');
			
			i++;
			
			if (i === slides.length) i = 0;
			
			slides[i].classList.add('active');
			
		}
	});
}

slider();



// AUTO
const autoBtn = document.querySelector('.btn__auto');
const slides = document.querySelectorAll('.slider__slide');

let status = 'off';
let i = 0;


function sliderAuto() {
	
	slides[i].classList.remove('active');
	
	i++;
	
	if (i === slides.length) i = 0;
	
	slides[i].classList.add('active');
	
}

// switch button
autoBtn.innerHTML = '<i class="fas fa-power-off"></i>';

function auto() {
	if (status === 'off') {
		
		interval = window.setInterval(sliderAuto, 2000);
		
		status = 'on';
		
		autoBtn.classList.add('active');
		autoBtn.style.color = '#0197f6';
	}
	
	else {
		status = 'off';

		window.clearInterval(interval);

		autoBtn.classList.remove('active');
		autoBtn.style.color = '#d7263d';
	}
}