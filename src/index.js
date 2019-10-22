//--------------------выпадающее главное меню-------------
function dropdown () {
    const btn = document.getElementById('dropdownMenuButton');
    const menu = document.querySelector('.dropdown__menu');
    btn.addEventListener('click', () => {
        menu.classList.toggle('display--visible');
        if (btn.style.backgroundColor === '') {
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        }
        else {
            btn.style.backgroundColor = '';
        }
    });
}


//-------------меняем размер карточки со стоимостью абонемента при наведении
function changeCardSize () {
    const cards = document.querySelectorAll('.subscriptionCard');
    for (let i=0; i<cards.length; i++) {
        cards[i].addEventListener('mouseenter', () => {
            if (i % 3 !== 1) {
                cards[i].classList.toggle('card--small');
                cards[i].classList.toggle('card--big');
                if (i % 3 === 0) {
                    cards[i+1].classList.toggle('card--small');
                    cards[i+1].classList.toggle('card--big');
                }
                else if (i % 3 === 2) {
                    cards[i-1].classList.toggle('card--small');
                    cards[i-1].classList.toggle('card--big');
                }
            };
        });
        cards[i].addEventListener('mouseleave', () => {
            if (i % 3 !== 1) {
                cards[i].classList.toggle('card--small');
                cards[i].classList.toggle('card--big');
                if (i % 3 === 0) {
                    cards[i+1].classList.toggle('card--small');
                    cards[i+1].classList.toggle('card--big');
                }
                else if (i % 3 === 2) {
                    cards[i-1].classList.toggle('card--small');
                    cards[i-1].classList.toggle('card--big');
                }
            };
        });
    };
}


//----------показываем разные абонементы для разного количества месяцев------------------
function changeMonth() {
    const months = document.querySelectorAll('.subscription__data__month p');
    const rows = document.querySelectorAll('.subscription__data__cards .row')
    for (let i=0; i<months.length; i++)
    {
        months[i].addEventListener('click', () => {
            for (let j=0; j<rows.length; j++) {
                if (j === i) {
                    rows[j].style.display = 'flex';
                }
                else {
                    rows[j].style.display = 'none';
                }
            }
        });
    }
}


//------------слайдер с отзывами внизу страницы-----------------
function changeReview () {
    const reviews = document.querySelectorAll('.review__slider__card');
    const prevBtn = document.querySelector('.review__slider__btn--prev');
    const nextBtn = document.querySelector('.review__slider__btn--next');
    
    prevBtn.addEventListener('click', () => {
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].classList.contains('card--left')) {
                reviews[i].classList.toggle('card--left');
                reviews[i].classList.toggle('card--right');
                if (i === 0) {
                    reviews[(reviews.length-1)].classList.toggle('card--left');
                }
                else {
                    reviews[i-1].classList.toggle('card--left');
                }
                if (i === reviews.length-1) {
                     reviews[0].classList.toggle('card--right');
                 }
                else {
                     reviews[i+1].classList.toggle('card--right');
                }
                break;
            }            
        }
    });

    nextBtn.addEventListener('click', () => {
        for (let i=0; i<reviews.length; i++) {
            if (reviews[i].classList.contains('card--right')) {
                reviews[i].classList.toggle('card--left')
                reviews[i].classList.toggle('card--right');
                if (i === 0) {
                    reviews[(reviews.length-1)].classList.toggle('card--left');
                }
                else {
                    reviews[i-1].classList.toggle('card--left');
                }
                if (i === reviews.length-1) {
                    reviews[0].classList.toggle('card--right');
                }
                else {
                    reviews[i+1].classList.toggle('card--right');
                }
                break;
            }
        }
    });
}

dropdown();
changeCardSize();
changeMonth();
changeReview();