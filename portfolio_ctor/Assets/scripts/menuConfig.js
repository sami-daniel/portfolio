const firstArt = document.getElementById('first_art')
const secondArt = document.getElementById('second_art')
const thirdArt = document.getElementById('third_art')
const forthyArt = document.getElementById('forthy_art')
const fiveArt = document.getElementById('five_art')
let menuSelectors = document.querySelectorAll('.ul_selector li')
const spanFirstMenu = document.getElementById('spanFirstMenu')
function IsElementInViewport(element) {
    if (element.tagName.toLowerCase() !== 'article') {
        throw new Error('O elemento não é um <article>.');
    }
    const rect = element.getBoundingClientRect();

    return rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

window.addEventListener('scroll', ()=>{
    if(IsElementInViewport(firstArt)) {
        ChangeColor(spanFirstMenu)
    }
})

function ChangeColor(elemento){
    if (!(elemento instanceof HTMLSpanElement)) {
        throw new Error('O elemento não é um <span>.');
    }
    menuSelectors.forEach(element =>{
        if(element.classList.contains("_colored_selecter")){
            element.classList.remove("_colored_selecter")
            
        }
    })
    elemento.classList.add("_colored_selecter")
}