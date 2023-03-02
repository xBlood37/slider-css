const moreButton = document.querySelector('.more');
const moreSpan = document.querySelector('.more__span');
const slide9 = document.querySelector('#slide-9');
const slide10 = document.querySelector('#slide-10');
const slide11 = document.querySelector('#slide-11');

moreButton.addEventListener('click', () => {
  if (moreSpan.textContent === 'Скрыть') {
    moreSpan.textContent = 'Показать все';
    slide9.classList.remove('card--open-more');
    slide10.classList.remove('card--open-more');
    slide11.classList.remove('card--open-more');
  } else if (moreSpan.textContent === 'Показать все') {
    moreSpan.textContent = 'Скрыть';
    slide9.classList.add('card--open-more');
    slide10.classList.add('card--open-more');
    slide11.classList.add('card--open-more');
  }
});
