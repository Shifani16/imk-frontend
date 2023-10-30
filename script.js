let header = document.getElementById('header');
let btn = document.getElementById('btn-home');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    header.style.top = value * 0.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    text.style.marginTop = 50 + value * -0.5 + + '%';

})

window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
