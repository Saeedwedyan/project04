const img =document.getElementById("profilePhoto")
const button =document.getElementById("switchButton")
button.addEventListener('click',function(){
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



