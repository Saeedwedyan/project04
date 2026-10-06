const button = document.getElementById("themeButton")
const body = document.querySelector("body");
button.addEventListener('click',function(){
    body.classList.toggle("dark");

})

