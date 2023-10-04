const a_elements = document.querySelectorAll('a')
let hrefValue = []
hrefValue.length = a_elements.length

for(var i = 0; i < a_elements.length; i++){
    if(!(a_elements[i].href.startsWith('#'))){
        a_elements[i].target = '_blank'
    }
}