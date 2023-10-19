const newMainScreen = document.querySelector('._lightbox')
const overlay = document.querySelector('.overlay')
const starterHardSkill = document.querySelector('._starter_lgtBox_hard')
const body = document.querySelector('body')
const btnClose = document.querySelector('.button_close')
const imgsCarousselBootstrap = document.querySelectorAll('.img1BoststrappCarousel , .img2BoststrappCarousel , .img3BoststrappCarousel')
const starterPortfolio = document.querySelector('.starter_lgtBox_port')
const mediaQueryCell = window.matchMedia('(max-width: 534px')
let h1_1 = document.querySelector('.titleProject_Ligther')
let h1_1_span = document.querySelector('.lighter_span_la')
let description_p = document.querySelector('._lightbox>div:last-child p')
let aTag = document.getElementById('tagA_lightbox')


starterHardSkill.addEventListener('click', () => {
    if (!mediaQueryCell.matches) {
        StartLightBox()
        const imgsLinks = [
            'Assets/imgs/imgs/start_screen.png',
            'Assets/imgs/imgs/win_screen.png',
            'Assets/imgs/imgs/lose_screen.png'
        ]
        let title = 'BLACK JACK'
        let spanTextTitle = 'C# .NET FRAMEWORK'
        let spanStyleColor = 'rgb(227, 1, 227)'
        let descriptionContent = 'O jogo de 21, também conhecido como blackjack, é um dos jogos de cartas mais populares em cassinos e' +
            'também pode ser jogado em casa ou online. O objetivo do jogo é ter uma mão com um valor total de 21 pontos, ou o mais próximo possível deste número, sem ultrapassá-lo.' +
            'Mais em '
        let linkName = '@gihub.com/sami-daniel'
        let linkhref = 'https://github.com/sami-daniel?tab=repositories&q=&type=&language=c%23&sort='
        ConfigLightBox(title, spanTextTitle, spanStyleColor, descriptionContent, linkName, linkhref, imgsLinks)
    }
})

starterPortfolio.addEventListener('click', () => {
    if (!mediaQueryCell.matches) {
        StartLightBox()
        const imgsLinks = [
            'Assets/imgs/imgs/chimper_lading_page.png',
            'Assets/imgs/imgs/Smene_photo.png',
            'Assets/imgs/imgs/mosaico_photo.png'
        ]
        let title = 'PROJETOS FRONT-END'
        let spanTextTitle = 'HTML & JAVASCRIPT'
        let spanStyleColor = 'rgb(227, 0, 227)'
        let descriptionContent = 'Aqui estão alguns projetos de desenvolvimento web que fiz durante minha etapa de aprendizado. São meramente ilustrativos e não têm fins lucrativos, porém representam outros sites que também são significativos. Embora não seja meu foco principal, os frameworks e técnicas de desenvolvimento web são muito importantes para o crescimento profissional de um "Desenvolvedor".'
        ConfigLightBox(title, spanTextTitle, spanStyleColor, descriptionContent, "@github.com/sami-daniel", "https://github.com/sami-daniel?tab=repositories&q=&type=&language=html&sort=", imgsLinks)
    }
})
btnClose.addEventListener('click', () => {
    overlay.classList.remove('entry_overlay')
    body.style.overflowY = 'auto'
    newMainScreen.classList.remove('entry_ligth_configs')
})

function StartLightBox() {
    overlay.classList.add('entry_overlay')
    body.style.overflowY = 'hidden'
    newMainScreen.classList.add('entry_ligth_configs')
}
function ConfigLightBox(textTitle, spanTextTitle, spanStyleColor, descriptionContent, linkName, linkhref, imgsLinks) {
    h1_1.textContent = textTitle
    h1_1_span.textContent = spanTextTitle
    h1_1_span.style.color = spanStyleColor
    description_p.textContent = descriptionContent
    aTag.innerHTML = linkName
    aTag.href = linkhref
    for (var i = 0; i < 3; i++) {
        imgsCarousselBootstrap[i].src = imgsLinks[i];
    }
}