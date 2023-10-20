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

// Kích hoạt lăn chuột bằng JavaScript
const scrollableContent = document.querySelector('.scrollable-content');
let isScrolling = false;
let startY = 0;
let scrollY = 0;

scrollableContent.addEventListener('mousedown', (e) => {
  isScrolling = true;
  startY = e.clientY;
  e.preventDefault();
});

scrollableContent.addEventListener('mouseup', () => {
  isScrolling = false;
  startY = 0;
  scrollY = 0;
});

scrollableContent.addEventListener('mousemove', (e) => {
  if (isScrolling) {
    const deltaY = startY - e.clientY;
    scrollableContent.scrollTop += deltaY;
    startY = e.clientY;
  }
});

scrollableContent.addEventListener('touchstart', (e) => {
  isScrolling = true;
  startY = e.touches[0].clientY;
  e.preventDefault();
});

scrollableContent.addEventListener('touchend', () => {
  isScrolling = false;
  startY = 0;
  scrollY = 0;
});

scrollableContent.addEventListener('touchmove', (e) => {
  if (isScrolling) {
    const deltaY = startY - e.touches[0].clientY;
    scrollY += deltaY;
    if (Math.abs(scrollY) >= 5) {
      scrollableContent.scrollTop += deltaY;
      startY = e.touches[0].clientY;
      scrollY = 0;
    }
  }
});

scrollableContent.addEventListener('wheel', (e) => {
  scrollableContent.scrollTop += e.deltaY;
});

// Introduce
sr.reveal('.hero-introduce .logo h2', {deplay: 200, origin: 'top'});
sr.reveal('.hero-introduce .logo h6', {deplay: 200, origin: 'left'});
sr.reveal('.hero-introduce .logo img', {deplay: 200, origin: 'right'});

if (isMobile()) {
	sr.reveal('.hero-introduce', {deplay: 500, origin: 'bottom'});
}

// Solution
sr.reveal('.hero-solution .logo h2', {deplay: 200, origin: 'top'});
sr.reveal('.hero-solution .logo h6', {deplay: 200, origin: 'left'});
sr.reveal('.hero-solution .logo img', {deplay: 200, origin: 'right'});

if (isDesktop()) {
	sr.reveal('.hero-solution', {deplay: 200, origin: 'top'});
}

// Project
sr.reveal('.hero-project .logo h6', {deplay: 200, origin: 'left'});
sr.reveal('.hero-project .logo img', {deplay: 200, origin: 'right'});

if (isDesktop()) {
	sr.reveal('.hero-project', {deplay: 200, origin: 'bottom'});
}

// Contact
sr.reveal('.hero-contact .logo h2', {deplay: 200, origin: 'top'});
sr.reveal('.hero-contact .logo h6', {deplay: 200, origin: 'left'});
sr.reveal('.hero-contact .logo img', {deplay: 200, origin: 'right'});

sr.reveal('.hero-contact p', {deplay: 450, origin: 'top'});
sr.reveal('.hero-contact .centered-horizontal-line', {deplay: 450, origin: 'bottom'});
