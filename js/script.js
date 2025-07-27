const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",() =>{
document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("opens"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternatestyle = document.querySelector(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor(){
    alternatestyle.forEach((style )=> {
        if(localStorage.getItem("color") === style.getAttribute("tittle"))
        {
            style.removeAttribute("disabled");
        }
    });
}
// theme light and dark mode
const dayNight = document.querySelector("day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
   dayNight.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})