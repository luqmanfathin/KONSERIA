const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))

document.querySelectorAll(".question").forEach(question => question.addEventListener("click", () => {
    if(question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active")
    }
    else {
        document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
        question.parentNode.classList.add("active")
    }

}));     
    
