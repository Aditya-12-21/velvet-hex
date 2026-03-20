document.addEventListener("DOMContentLoaded", function(){

// SCROLL
window.scrollToCollection = function(){
document.getElementById("collection").scrollIntoView({
behavior:"smooth"
});
};

// MENU
window.toggleMenu = function(){
let menu = document.getElementById("menu");
menu.classList.toggle("active");
};

// HERO SLIDER
let images = ["preview one.jpeg","preview two.jpeg","preview three.jpeg"];
let i = 0;

setInterval(()=>{
i = (i + 1) % images.length;
document.querySelector(".hero").style.background =
`url(${images[i]}) center/cover no-repeat`;
},3000);

// IMAGE POPUP
let imgs = document.querySelectorAll(".card img");

imgs.forEach(img=>{
img.addEventListener("click", function(){

let popup = document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,0.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";

let image = document.createElement("img");
image.src=this.src;
image.style.maxWidth="90%";
image.style.maxHeight="80%";

popup.appendChild(image);

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

});
});

// WHATSAPP ORDER
window.orderNow = function(product){
let msg = `Hi, I want to order: ${product} from VELVET HEX`;
window.open(`https://wa.me/918847325312?text=${encodeURIComponent(msg)}`,"_blank");
};

// SCROLL ANIMATION
let elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", ()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

});