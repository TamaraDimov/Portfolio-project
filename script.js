const toggleNavbar = () => {
    document.querySelector(".coverPage").classList.toggle("show")
}

document.querySelector(".toggleNav").addEventListener("click", function(){
    toggleNavbar()
})

document.querySelector(".exit").addEventListener("click", function(){
    toggleNavbar()
})