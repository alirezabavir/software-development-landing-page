let btnOpenMenu = document.querySelector("#openmenu");
let btnCloseMenu = document.querySelector("#closemenu");
let menuBox = document.querySelector(".header-burger-list")
btnOpenMenu.addEventListener("click", openMenu)
function openMenu() {
    menuBox.style.left = -75 + "px";
    menuBox.style.top = 20 + "px";
    btnOpenMenu.classList.add("d-none")
    btnCloseMenu.classList.remove("d-none")
    menuBox.classList.remove("d-none")
}
btnCloseMenu.addEventListener("click", closeMenu)
function closeMenu() {
    menuBox.style.left = 100 + "px";
    menuBox.style.top = 0 + "px";
    btnOpenMenu.classList.remove("d-none")
    btnCloseMenu.classList.add("d-none")
    menuBox.classList.add("d-none")

}