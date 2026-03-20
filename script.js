document.addEventListener("DOMContentLoaded", function(){

// 🔥 SCROLL TO COLLECTION
window.scrollToCollection = function(){
document.getElementById("collection").scrollIntoView({
behavior:"smooth"
});
};

// 🔥 MOBILE MENU
window.toggleMenu = function(){
let menu = document.getElementById("menu");
menu.classList.toggle("active");
};

// 🎬 HERO IMAGE SLIDER (SMOOTH)
let images = ["preview one.jpeg","preview two.jpeg","preview three.jpeg"];
let i = 0;

setInterval(()=>{
i = (i + 1) % images.length;

let hero = document.querySelector(".hero");
hero.style.transition = "1s";
hero.style.background = `url(${images[i]}) center/cover no-repeat`;

},4000);

// 💎 IMAGE POPUP (FIXED)
let imgs = document.querySelectorAll(".card img");

imgs.forEach(img=>{
img.addEventListener("click", function(){

let popup = document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,0.95)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";

let image = document.createElement("img");
image.src=this.src;
image.style.maxWidth="90%";
image.style.maxHeight="80%";
image.style.borderRadius="10px";

popup.appendChild(image);

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

});
});

// 📱 WHATSAPP ORDER (SMART)
window.orderNow = function(product){
let msg = `Hi, I want to order: ${product} from VELVET HEX`;
window.open(`https://wa.me/918847325312?text=${encodeURIComponent(msg)}`,"_blank");
};

// ✨ SCROLL ANIMATION (SMOOTHER)
let elements = document.querySelectorAll(".fade-in");

function reveal(){
elements.forEach(el=>{
let top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 80){
el.classList.add("show");
}
});
}

window.addEventListener("scroll", reveal);
reveal(); // load pe bhi chale

});