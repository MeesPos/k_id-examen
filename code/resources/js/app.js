let openNav = document.getElementById('open-nav');
let closeNav = document.getElementById('close-nav');
let menu = document.getElementById('nav');

openNav.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

closeNav.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});