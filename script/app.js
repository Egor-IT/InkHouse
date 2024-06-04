"use strict"


let navbar = document.getElementById('navbar')
let logospan = document.getElementById('logospan')
let navbarContainer = document.getElementById('navbarContainer')

function scrollnav() {
    if (window.pageYOffset >= 1) {
        navbar.classList.add("navScroll");
        logospan.classList.add("logoScrollColor");
        navbarContainer.classList.add("containerScroll")
    } else {
        navbar.classList.remove("navScroll");
        logospan.classList.remove("logoScrollColor");
        navbarContainer.classList.remove("containerScroll")
    }
}

window.onscroll = function () {
    scrollnav()
}