const header = document.getElementById("header");
const navList = document.querySelector("ul.nav-list");

console.log(navList.classList)

window.onscroll = function() {
	if (window.pageYOffset > 50) {
       return header.classList.add("onscroll");
    }

    header.classList.remove("onscroll");
}

function toggleNav() {
    const classLists = [ ...navList.classList ]
    if (classLists.includes("nav-list-visible")) {
        navList.classList.remove("nav-list-visible")
    } else {
        navList.classList.add("nav-list-visible");
    }
}