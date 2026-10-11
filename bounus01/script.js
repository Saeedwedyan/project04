const button = document.getElementById("themeButton")
const body = document.querySelector("body");
button.addEventListener('click',function(){
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        button.textContent = "Light Mode☀️";
    } else {
        button.textContent = "Dark Mode🌙";
    }
 
})
const img = document.getElementById("profilePhoto")
const switchButton = document.getElementById("switchButton")
switchButton.addEventListener('click',function(){
    img.style.opacity = "0";
   if(img.src.includes("assets/profile.jpg")){ 
        setTimeout(function(){
            img.src="assets/profile2.jpg"  
            img.alt="Profile photo 2 of Saeed Alwedian"
            img.style.opacity = "1";
        },400);
   }else{
        setTimeout(function(){
            img.src="assets/profile.jpg"  
            img.alt="Profile photo of Saeed Alwedian"
            img.style.opacity = "1";
        },400);
         
    }
})
