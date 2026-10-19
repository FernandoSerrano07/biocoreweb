// Menú del encabezado en celulares: abre y cierra la lista de enlaces.
document.addEventListener('DOMContentLoaded', function () {
    var boton = document.querySelector('.menu-boton');
    var menu = document.getElementById('menu-principal');
    if (!boton || !menu) return;

    function cerrar() {
        menu.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
        boton.querySelector('.menu-boton__texto').textContent = 'Menú';
    }

    boton.addEventListener('click', function () {
        var abierto = menu.classList.toggle('abierto');
        boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        boton.querySelector('.menu-boton__texto').textContent = abierto ? 'Cerrar' : 'Menú';
    });

    // Al elegir una sección, el menú se cierra para dejar ver la página.
    menu.querySelectorAll('a').forEach(function (enlace) {
        enlace.addEventListener('click', cerrar);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('abierto')) {
            cerrar();
            boton.focus();
        }
    });
});
