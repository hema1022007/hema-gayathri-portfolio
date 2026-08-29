// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


// Close menu when clicking a link

const navLinks = document.querySelectorAll("#nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});



// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ================================
// PROJECT BUTTON
// ================================

function showProject(projectName) {

    alert(
        projectName +
        "\n\nGitHub/project link can be added here."
    );

}



// ================================
// FOOTER YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();