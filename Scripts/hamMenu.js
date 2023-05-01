/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function changeMenuIcon(menuIcon) {
    menuIcon.classList.toggle("change");

    var x = document.getElementById("links");
    var body = document.getElementById("pageBody");
    if (x.style.display === "block") {
        body.style.marginTop = "0px";
        x.style.display = "none";
    } else {
        body.style.marginTop = "100px";
        x.style.display = "block";
    }
}


window.addEventListener('resize', () => {
    // Toggle on mobile
    var x = document.getElementById("links");
    if (window.innerWidth >= 1000) {
        if (x.style.display === "none") {
            x.style.display = "initial";
        }
    } else if (window.innerWidth <= 1000){
        if (x.style.display === "initial") {
            x.style.display = "none";
        }
    }
});
