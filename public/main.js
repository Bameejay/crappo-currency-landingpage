const cards = document.querySelectorAll('.box')
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')



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

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})