function highlightCode() {
    var pres = document.querySelectorAll("figure");

    for (var i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
    }
}
highlightCode();