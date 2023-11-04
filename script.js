let header = document.getElementById('header');
let btn = document.getElementById('btn-home');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    btn.style.marginTop = value * 1.5 + 'px';
    text.style.marginTop = 50 + value * -0.5 + + '%';

})

function setActive(clickedElement) {
    const listItems = document.querySelectorAll("#header ul li a");
    listItems.forEach(items => {
        items.classList.remove("active");
    });

    clickedElement.classList.add("active")
}


