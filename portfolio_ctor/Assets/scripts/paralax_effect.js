window.addEventListener('scroll', function(){
    var _designElements = document.querySelectorAll("._pAbsolute_img_first");
    var scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    _designElements.style.top = scrollTop * 20;
});