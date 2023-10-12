let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

navlist.addEventListener('click', () => {
	if (window.innerWidth <= 768) { // Check if the screen width is less than or equal to 768 pixels (adjust this as needed)
		navlist.classList.toggle('fullscreen');
	}
});

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	deplay: 450,
	reset: true,
});

sr.reveal('.hero-text', {deplay: 200, origin: 'top'});
sr.reveal('.hero-introduce', {deplay: 200, origin: 'top'});
sr.reveal('.hero-img', {deplay: 450, origin: 'top'});
sr.reveal('.icons', {deplay: 500, origin: 'left'});
sr.reveal('.scroll-down', {deplay: 500, origin: 'right'});
