const a_elements = document.querySelectorAll('a')
let hrefValue = []
hrefValue.length = a_elements.length

for (let i = 0; i < a_elements.length; i++) {
    hrefValue[i] = a_elements[i].getAttribute('href')
}

for (let i = 0; i < hrefValue.length; i++) {
    if (!(hrefValue[i].startsWith('#'))) {
    }
}
