const firstArt = document.getElementById('first_art')
const secondArt = document.getElementById('second_art')
const thirdArt = document.getElementById('third_art')
const forthyArt = document.getElementById('forthy_art')
const fiveArt = document.getElementById('five_art')
const spanFirstMenu = document.getElementById('spanFirstMenu')
const spanSecondMenu = document.getElementById('spanSecondMenu')
const spanThirdMenu = document.getElementById('spanThirdMenu')
const spanForthyMenu = document.getElementById('spanForthyMenu')
const spanFiveMenu = document.getElementById('spanFiveMenu')

window.addEventListener('scroll', () => {
    if (isElementInViewport(firstArt)) {
        changeSelectedMenu(spanFirstMenu)
        return
    }
    if (isElementInViewport(secondArt)) {
        changeSelectedMenu(spanSecondMenu)
        return
    }
    if (isElementInViewport(thirdArt)) {
        changeSelectedMenu(spanThirdMenu)
        return
    }
    if (isElementInViewport(forthyArt)) {
        changeSelectedMenu(spanForthyMenu)
        return
    }
    if (isElementInViewport(fiveArt)) {
        changeSelectedMenu(spanFiveMenu)
        return
    }
})

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    return (
        (rect.top + rect.height / 2) >= 0 &&
        (rect.left + rect.width / 2) >= 0 &&
        (rect.bottom - rect.height / 2) <= windowHeight &&
        (rect.right - rect.width / 2) <= windowWidth
    );
}

function changeSelectedMenu(spanElement){
    let menuSelectors = document.querySelectorAll('.ul_selector > li > a > span')

    menuSelectors.forEach(element =>{
        if(element.classList.contains('_colored_selecter')){
            element.classList.remove('_colored_selecter')
            element.removeAttribute('class')
            return
        }
    })
    spanElement.classList.add('_colored_selecter')
}
