const cards = document.querySelectorAll('.box')
let ham = document.getElementById('hammm')
const openHamburger = document.getElementById('#open-hamburger')

// Card

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        cards.forEach(card => {
            card.classList.remove('selected')
    })

    const clicked = e.currentTarget
    if (!clicked.classList.contains('selected')) {
        clicked.classList.add('selected')
    }
    })
});

// Hamburger

function Open(){ 
    ham.classList.add('w-full')
}

function Close(){
    ham.classList.remove('w-full')
}

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        openHamburger.style.display = "none"
    } else {
        openHamburger.style.display = "block"
    }
}
