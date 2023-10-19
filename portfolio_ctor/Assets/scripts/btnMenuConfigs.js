const menu = document.querySelector('._navmenu')
const ul_selectorAll = document.querySelectorAll('.ul_selector a')
const brigthnessSelector = document.querySelector(`input[type='range']`)
document.querySelector('.css-i6dzq1').addEventListener('click', () => {
    menu.style.left = '0%'
    document.body.style.overflow = 'hidden';
    ul_selectorAll.forEach(e => {
        e.addEventListener('click', () => {
            menu.style.left = '100%'
            document.body.style.overflow = 'visible';
        })
    })
    brigthnessSelector.addEventListener('change', () => {
        menu.style.left = '100%'
        document.body.style.overflow = 'visible'
    })


})