// MENU
function toggleMenu(){
document.getElementById("sideMenu").classList.toggle("active");
}

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},3000);

// ORDER
function orderNow(product){
window.open(`https://wa.me/918847325312?text=I want to order ${product}`);
}

// FEEDBACK
document.getElementById("feedbackForm").addEventListener("submit", function(e){
e.preventDefault();

let rating = document.querySelector('input[name="rating"]:checked');
let msg = document.getElementById("msg").value;

let text = `Feedback:\nRating: ${rating ? rating.value : "Not selected"}\nMessage: ${msg}`;

window.open(`https://wa.me/918847325312?text=${encodeURIComponent(text)}`);
});