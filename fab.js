const settingsBtn = document.getElementById('settingsBtn');
const menu = document.getElementById('menu');

let menuOpen = false;

/*
Make circles
Ripple effect
*/

settingsBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    if (menuOpen)
        showMenu();
    else
        hideMenu();
});

function showMenu() {
    // console.log("Show Menu");
    menu.style.opacity = 1;
    menu.classList.add("openMenu");
    menu.classList.remove("closeMenu");
}

function hideMenu() {
    // console.log("Hide Menu");
    menu.style.opacity = 0;
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
}