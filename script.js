function scrollToCollection(){
document.getElementById("collection").scrollIntoView({
behavior:"smooth"
});
}
window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "#000";
}

else{
navbar.style.background = "transparent";
}

});
let images = document.querySelectorAll(".card img");

images.forEach(img => {

img.addEventListener("click", function(){

this.classList.toggle("zoom");

});

});