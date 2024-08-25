
function toggleMenu() {
  var navLinks = document.querySelector(".header-nav-links");
  navLinks.classList.toggle("active");
}
// Get the button
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
// Smooth scroll with offset for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 120; // Adjust this offset value according to your fixed header height

        if (target) {
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});