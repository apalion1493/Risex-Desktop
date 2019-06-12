
function toggleMenuClickHandler(evt) {
    let menu = document.querySelector('.desktop-menu');
    menu.classList.toggle("active");
}

let menuToggle = document.querySelector('.header-desktop__burger');
menuToggle.addEventListener("click", toggleMenuClickHandler);

let menuClose = document.querySelector('.header-desktop__close');
menuClose.addEventListener("click", toggleMenuClickHandler);


document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('accordion-toggle')) return;

    var content = document.querySelector(event.target.hash);
    if (!content) return;

    event.preventDefault();

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }

    content.classList.toggle('active');

});

let el = document.querySelector('.accordion-toggle');
el.onclick = function() {
    el.classList.toggle('active');
};

function myFunction1(t) {
    t.parentElement.style.borderColor = "#13C64F";
}

function myFunction2(t) {
    t.parentElement.style.borderColor = "#DEEFE4";
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
