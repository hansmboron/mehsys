function showInfoBar() {
    var infobar = document.getElementById("infobar");
    var top = parseInt(infobar.style.top);
    if (top < 0) {
        top += 5;
        infobar.style.top = top + "px";
        setTimeout(function () { showInfoBar() }, 50);
    }
    else {
        if (document.all && !window.XMLHttpRequest)
            infobar.style.setExpression("top", 'document.compatMode=="CSS1Compat"? document.documentElement.scrollTop+"px" : body.scrollTop+"px"');
        else
            infobar.style.top = 0;
    }
}
function closeInfoBar() {
    document.getElementById("infobar").style.display = "none";
}
function initInfoBar() {
    var docWidth = 800;
    if (typeof window.innerWidth != 'undefined') {
        docWidth = window.innerWidth;
    }
    else
        if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            docWidth = document.documentElement.clientWidth;
        }
        else {
            docWidth = document.getElementsByTagName('body')[0].clientWidth;
        }
    // document.getElementById("infobar").style.width = "100%";
    var height = parseInt(document.getElementById("infobar").offsetHeight);
    document.getElementById("infobar").style.top = height * (-1) + "px";
    showInfoBar();
}
initInfoBar();