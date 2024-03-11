let body = document.body;
let menu = document.getElementById('mobile-menu');
let icon = document.getElementById('menu-icon');

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      if (body.classList.contains('d-block')) {
        body.classList.remove('d-block');
        menu.classList.remove('d-block');
        menu.classList.add('d-none');
      }
    }
  });

document.getElementById('menu-icon').addEventListener('click', function() {
    if (menu.classList.contains('d-none')) {
        menu.classList.remove('d-none');
        menu.classList.add('d-block');
        body.classList.add('d-block');
        icon.src = 'assets/images/icon-menu-close.svg'; 
    } else {
        menu.classList.remove('d-block');
        menu.classList.add('d-none');
        body.classList.remove('d-block');
        icon.src = 'assets/images/icon-menu.svg'; // Cambia el icono a 'icon-menu.svg' cuando el menú está cerrado        
    }
});
