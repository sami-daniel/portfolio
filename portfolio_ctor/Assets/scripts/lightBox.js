const newMainScreen = document.querySelector('._lightbox')
const overlay = document.querySelector('.overlay')
const starter = document.querySelector('._starter_lgtBox_hard')
const body = document.querySelector('body')
const btnClose = document.querySelector('.button_close')
const imgsCarousselBootstrap = document.querySelectorAll('.img1BoststrappCarousel , .img2BoststrappCarousel , .img3BoststrappCarousel')
let h1_1 = document.querySelector('.titleProject_Ligther')
let h1_1_span = document.querySelector('.lighter_span_la')
let description_p = document.querySelector('._lightbox>div:last-child p')

starter.addEventListener('click', () => {
    overlay.classList.add('entry_overlay')
    body.style.overflowY = 'hidden'
    newMainScreen.classList.add('entry_ligth_configs')
    const imgsLinks = [
        'Assets/imgs/imgs/start_screen.png',
        'Assets/imgs/imgs/win_screen.png',
        'Assets/imgs/imgs/lose_screen.png'
    ]
    StartLightBox('BLACK JACK', 'C# .NET FRAMEWORK', 'rgb(207, 1, 207)', 'O jogo de 21, também conhecido como blackjack, é um dos jogos de cartas mais populares em cassinos e' +
        'também pode ser jogado em casa ou online. O objetivo do jogo é ter uma mão com um valor total de 21 pontos, ou o mais próximo possível deste número, sem ultrapassá-lo. Mais em ', 'gihub.com/sami-daniel', 'https://github.com/sami-daniel/sami-daniel', imgsLinks)
})

btnClose.addEventListener('click', () => {
    overlay.classList.remove('entry_overlay')
    body.style.overflowY = 'auto'
    newMainScreen.classList.remove('entry_ligth_configs')
})

function StartLightBox(textTitle, spanTextTitle, spanStyleColor, descriptionContent, linkName, linkhref, imgsLinks) {
    h1_1.textContent = textTitle
    h1_1_span.textContent = spanTextTitle
    h1_1_span.style.color = spanStyleColor
    description_p.textContent = descriptionContent
    const link = document.createElement('a');
    link.textContent = linkName
    link.href = linkhref
    description_p.textContent += link.textContent;
    for (var i = 0; i < 3; i++) {
        imgsCarousselBootstrap[i].src = imgsLinks[i];
    }
}