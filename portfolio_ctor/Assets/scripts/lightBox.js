const newMainScreen = document.querySelector('._lightbox')
const overlay = document.querySelector('.overlay')
const starter = document.querySelector('._start_light_box')
const body = document.querySelector('body')
const btnClose = document.querySelector('.button_close')
let imgLightBox = document.querySelector('._lightbox>div>div:first-child>img');
starter.addEventListener('click', () => {
    overlay.classList.add('entry_overlay')
    body.style.overflowY = 'hidden'
    newMainScreen.classList.add('entry_ligth_configs')
    imgLightBox.src = 'Assets/imgs/logos/logo_me.png'
})

btnClose.addEventListener('click', () => {
    overlay.classList.remove('entry_overlay')
    body.style.overflowY = 'auto'
    newMainScreen.classList.remove('entry_ligth_configs')
})

