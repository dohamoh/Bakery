
let navBar = document.getElementById("navBar");



window.onscroll = function () {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop >= 750) {
        navBar.classList.add('nav-colored')
    } else {
        navBar.classList.remove('nav-colored')
        navBar.classList.add('nav-transparent')
    }
}