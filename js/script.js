<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
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

	function isDesktop() {
		return window.innerWidth > 1180;
	}

	function isMobile() {
		return window.innerWidth < 768;
	}

	// Introduce
	sr.reveal('.hero-introduce .logo h2', {deplay: 200, origin: 'top'});
	sr.reveal('.hero-introduce .logo h6', {deplay: 200, origin: 'left'});
	sr.reveal('.hero-introduce .logo img', {deplay: 200, origin: 'right'});

	// Solution
	sr.reveal('.hero-solution .logo h2', {deplay: 200, origin: 'top'});
	sr.reveal('.hero-solution .logo h6', {deplay: 200, origin: 'left'});
	sr.reveal('.hero-solution .logo img', {deplay: 200, origin: 'right'});

	if (isDesktop()) {
		// sr.reveal('.hero-solution .content-flex-right', {deplay: 200, origin: 'right'});
		// sr.reveal('.hero-solution .content-flex-left', {deplay: 200, origin: 'left'});
		sr.reveal('.hero-solution .content-flex-center', {deplay: 200, origin: 'top'});
		sr.reveal('.hero-solution .container-logo-hethong', {deplay: 200, origin: 'bottom'});
	}

	// Project
	sr.reveal('.hero-project .logo h2', {deplay: 200, origin: 'top'});
	sr.reveal('.hero-project .logo h6', {deplay: 200, origin: 'left'});
	sr.reveal('.hero-project .logo img', {deplay: 200, origin: 'right'});

	if (isDesktop()) {
		// sr.reveal('.hero-project .content-flex-right', {deplay: 200, origin: 'right'});
		// sr.reveal('.hero-project .content-flex-left', {deplay: 200, origin: 'left'});
	}

	// Contact
	sr.reveal('.hero-contact .logo h2', {deplay: 200, origin: 'top'});
	sr.reveal('.hero-contact .logo h6', {deplay: 200, origin: 'left'});
	sr.reveal('.hero-contact .logo img', {deplay: 200, origin: 'right'});

	sr.reveal('.hero-contact p', {deplay: 450, origin: 'top'});
	sr.reveal('.hero-contact .centered-horizontal-line', {deplay: 450, origin: 'bottom'});
});

var videoId = 'k6AgJjajtv8';

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: videoId,
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}
=======
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
>>>>>>> afb923b571591e5d81493ba19517ce4a03740b49
