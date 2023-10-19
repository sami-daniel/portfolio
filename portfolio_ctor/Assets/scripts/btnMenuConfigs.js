const menu = document.querySelector('._navmenu')
const ul_selectorAll = document.querySelectorAll('.ul_selector a')
const brigthnessSelector = document.querySelector(`input[type='range']`)

document.querySelector('.css-i6dzq1').addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)'
    document.body.style.overflowY = 'hidden';
    ul_selectorAll.forEach(e => {
        e.addEventListener('click', () => {
            e.style.display = 'none'
            document.body.style.overflowY = 'visible';
        })
    })

    brigthnessSelector.addEventListener('change', () => {
        menu.style.transform = 'translateX(100%)'
        document.body.style.overflowY = 'visible'
    })
})