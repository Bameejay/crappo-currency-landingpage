const cards = document.querySelectorAll('.box')
// const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')
let ham = document.getElementById('hammm')
const openHamburger = document.getElementById('#open-hamburger')

// window.onscroll( ()=> {
//     openHamburger.style.display = "none"
// })

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        openHamburger.style.display = "none"
    } else {
        openHamburger.style.display = "block"
    }
}





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

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// })
function Open(){ 
    ham.classList.add('w-full')
}

function Close(){
    ham.classList.remove('w-full')
}

// ham.addEventListener('click', (e) => {
//     e.preventDefault
//     alert('Ma here we dey')
//     console.log("I will")
// })