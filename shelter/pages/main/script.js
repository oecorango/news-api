// -------------------------hamburger----------------------------

const hamburgerContainer = document.querySelector('.navigation__container');
const hamburgerMenu = document.querySelector('.navigation__list');
const hamburgerButton = document.querySelector('.hamburger__icon');
const body = document.body;

if (hamburgerMenu && hamburgerButton) {
	hamburgerButton.addEventListener('click', () => {
		hamburgerContainer.classList.toggle('active')
		hamburgerMenu.classList.toggle('active')
		hamburgerButton.classList.toggle('active')
		body.classList.toggle('lock')
	})

	hamburgerContainer.addEventListener('click', event => {
		if (event.target.classList.contains('navigation__container')) {
			hamburgerContainer.classList.remove('active')
			hamburgerMenu.classList.remove('active')
			hamburgerButton.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	hamburgerMenu.querySelectorAll('.navigation__link').forEach(link => {
		link.addEventListener('click', () => {
			hamburgerContainer.classList.remove('active')
			hamburgerMenu.classList.remove('active')
			hamburgerButton.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const sectionID = link.getAttribute('href').substring(1);
		document.getElementById(sectionID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

// -------------------------slider----------------------------

const CAROUSEL = document.querySelector('.carousel__list')
const BTN_LEFT = document.querySelector('.carousel__prev');
const BTN_RIGHT = document.querySelector('.carousel__next');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
// const card = document.querySelectorAll('div.cards');


const createCardTemplate = () => {
	const card = document.createElement('div');
	card.classList.add('cards');
	return card;
}

const moveLeft = () => {
	CAROUSEL.classList.add('transition-left');
	BTN_LEFT.removeEventListener('click', moveLeft);
	BTN_RIGHT.removeEventListener('click', moveRight);
}

const moveRight = () => {
	CAROUSEL.classList.add('transition-right');
	BTN_RIGHT.removeEventListener('click', moveRight);
	BTN_LEFT.removeEventListener('click', moveLeft);
}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight)

CAROUSEL.addEventListener('animationend', (event) => {
	let changedItem;
	if (event.animationName === 'move-left') {
		CAROUSEL.classList.remove('transition-left');
		changedItem = ITEM_LEFT;
		CAROUSEL.classList.remove('transition-right');
		document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;

	} else {
		CAROUSEL.classList.remove('transition-right');
		changedItem = ITEM_RIGHT;
		CAROUSEL.classList.remove('transition-left');
		document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
	}

	changedItem.innerHTML = '';
	for (let i = 0; i < 3; i++) {
		const card = createCardTemplate();
		card.innerText = Math.floor(Math.random() * 8);
		changedItem.appendChild(card);
	}

	BTN_LEFT.addEventListener('click', moveLeft);
	BTN_RIGHT.addEventListener('click', moveRight);
})