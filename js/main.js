// fitur dropdown 

let menu = document.getElementById('menu-icon');
let navbar = document.getElementById('dropdown')

menu.addEventListener('click', function() {
    console.log('behasil')
    navbar.classList.toggle('active')
})