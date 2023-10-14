// function lines(){
// 	let sizeW = Math.random() * 12;
// 	let e = document.createElement('div');
// 	e.setAttribute('class','circle');
// 	document.body.appendChild(e);

// 	e.style.width = 2 +sizeW+ 'px';
// 	e.style.left = Math.random() * + innerWidth + 'px';

// 	setTimeout(function(){
// 		document.body.removeChild(e)
// 	},5000);
// }

// setInterval(function(){
// 	lines();
// },200);

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

// Index
sr.reveal('.hero-text', {deplay: 200, origin: 'top'});
sr.reveal('.hero-img', {deplay: 450, origin: 'top'});
sr.reveal('.icons', {deplay: 500, origin: 'left'});
sr.reveal('.scroll-down', {deplay: 500, origin: 'right'});

// Introduce
sr.reveal('.hero-introduce', {deplay: 200, origin: 'top'});

// Project
sr.reveal('.hero-project .logo h2', {deplay: 200, origin: 'bottom'});
sr.reveal('.hero-project .logo h6', {deplay: 200, origin: 'left'});
sr.reveal('.hero-project .logo img', {deplay: 200, origin: 'right'});
sr.reveal('.hero-project .content-flex-right', {deplay: 200, origin: 'right'});
sr.reveal('.hero-project .content-flex-left', {deplay: 200, origin: 'left'});
