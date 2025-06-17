const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const hamburgerLink = document.querySelectorAll('.hamburger-link');

hamburger.addEventListener('click', ()=> {
    header.classList.toggle('open');
});

hamburgerLink.forEach(item => {
    item.addEventListener('click', ()=> {
        header.classList.remove('open');
    })
})