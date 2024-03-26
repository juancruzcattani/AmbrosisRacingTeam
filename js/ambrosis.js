document.addEventListener('DOMContentLoaded', function () {
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    const imagenPrincipal1 = document.getElementById('imagenPrincipal1');
    const imagenModal = document.getElementById('imagenModal');
    const imagenModalImg = document.getElementById('imagenModalImg');

    imagenPrincipal.addEventListener('click', () => {
        imagenModalImg.src = imagenPrincipal.src;
        $('#imagenModal').modal('show');
    });

    imagenPrincipal1.addEventListener('click', () => {
        imagenModalImg.src = imagenPrincipal1.src;
        $('#imagenModal').modal('show');
    });
});