document.addEventListener('DOMContentLoaded', () => {
    // 1. Control del menú adaptable en dispositivos móviles
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    btnMenu.addEventListener('click', () => {
        menuPrincipal.classList.toggle('activo');
    });

    // Cerrar el menú móvil automáticamente al hacer clic en un enlace
    const enlacesMenu = menuPrincipal.querySelectorAll('a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menuPrincipal.classList.remove('activo');
        });
    });

    // 2. Interacción del formulario de suscripción
    const formulario = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nombreUsuario = document.getElementById('nombre').value;
        
        mensajeConfirmacion.textContent = `¡Gracias, ${nombreUsuario}! Tu suscripción ha sido registrada correctamente.`;
        mensajeConfirmacion.style.display = 'block';
        
        formulario.reset();
    });
});
