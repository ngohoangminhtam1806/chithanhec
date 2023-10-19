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

// Kích hoạt lăn chuột bằng JavaScript
document.querySelector('.scrollable-content').addEventListener('wheel', (e) => {
	const element = document.querySelector('.scrollable-content');
	element.scrollTop += e.deltaY;
});

// Index

// Lấy phần tử nút "scroll-down" và phần tử "message-list"
const scrollDownButton = document.getElementById("scroll-down-button");
const messageList = document.getElementById("message-list");

// Đặt biến để theo dõi trạng thái hiển thị của danh sách và biểu tượng
let isMessageListVisible = false;

// Đặt sự kiện cho nút "scroll-down"
scrollDownButton.addEventListener('click', (event) => {
	event.preventDefault();

	if (isMessageListVisible) {
		// Nếu danh sách đã hiển thị, ẩn nó và thay đổi biểu tượng thành "message"
		messageList.style.display = 'none';
		isMessageListVisible = false;
		scrollDownButton.innerHTML = '<i class="bx bxs-chat"></i>';
	} else {
		// Nếu danh sách chưa hiển thị, hiển thị nó và thay đổi biểu tượng thành "X"
		const scrollDownButtonRect = scrollDownButton.getBoundingClientRect();
		messageList.style.left = scrollDownButtonRect.right + 'px';
		messageList.style.display = 'block';
		isMessageListVisible = true;
		scrollDownButton.innerHTML = '<i class="ri-close-fill"></i>';
	}
});


sr.reveal('.hero-text', {deplay: 200, origin: 'top'});
sr.reveal('.hero-img', {deplay: 450, origin: 'top'});
sr.reveal('.icons', {deplay: 500, origin: 'left'});
sr.reveal('.scroll-down', {deplay: 500, origin: 'bottom'});
