import './find.css';

const input: HTMLButtonElement | null = document.querySelector('.find__input');
const button = document.querySelector('.find__btn');

button?.addEventListener('click', () => {
  const newsChannel = document.querySelectorAll('.source__item');
  if (input) {
    const findValue: string = input.value.toLowerCase();

    newsChannel.forEach((elem) => {
      elem.classList.remove('source__item_off');
      if (!elem.children[0].textContent?.toLowerCase().includes(findValue)) {
        elem.classList.add('source__item_off');
        elem.classList.add('source__item_off');
      }
    });
  }
});
