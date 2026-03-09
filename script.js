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
let images = document.querySelectorAll(".card img");

images.forEach(img => {

img.addEventListener("click", function(){

let popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.background = "rgba(0,0,0,0.9)";
popup.style.display = "flex";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";

let image = document.createElement("img");
image.src = this.src;
image.style.width = "400px";
image.style.borderRadius = "10px";

popup.appendChild(image);

popup.onclick = function(){
popup.remove();
};

document.body.appendChild(popup);

});

});