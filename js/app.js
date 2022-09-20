const hamburgerEl = document.getElementById("hamburger")
const exitEl = document.getElementById("exit")
const sideBarEl = document.getElementById("sidebar")
function openSideBar(){
    hamburgerEl.style.display = "none"
    exitEl.style.display = "flex"
    sideBarEl.style.marginLeft = "0"
    exitEl.style.color = "white"
    exitEl.style.borderRadius = "50%"
    exitEl.style.width = "40px"
    exitEl.style.height = "40px"
    exitEl.style.justifyContent = "center"
    exitEl.style.alignItems = "center"
    exitEl.style.backgroundColor = "red"

}
function closeSideBar(){
    exitEl.style.display = "none"
    hamburgerEl.style.display = "block"
    sideBarEl.style.marginLeft = ""
}

hamburgerEl.addEventListener("click" , openSideBar)
exitEl.addEventListener("click", closeSideBar )