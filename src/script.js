var navIcon = document.getElementById("bars");
var navMenuLeft = document.getElementById("navMenuLeft");
var navMenuRight = document.getElementById("navMenuRight");
var display = 1;

// Function to show/hide navigation menu
function hideShow() {
    if (display == 1) {
        navMenuLeft.style.opacity = 1;
        navMenuRight.style.opacity = 1;
        navIcon.className = "fa fa-angle-down";
        display = 0;
    }
    else {
        navMenuLeft.style.opacity = 0;
        navMenuRight.style.opacity = 0;
        navIcon.className = "fa fa-bars";
        display = 1;
    }
}

// Creates animation for each element
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenLeftElements = document.querySelectorAll('.hiddenLeft');
const hiddenRightElements = document.querySelectorAll('.hiddenRight');
const hiddenBottomElements = document.querySelectorAll('.hiddenBottom');
hiddenLeftElements.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));
hiddenBottomElements.forEach((el) => observer.observe(el));

// Ensures smooth scrolling when navigating down the page by link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
