document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.5; // Ajusta el volumen si es necesario
    audio.play().catch(error => {
        console.log("Reproducción automática fallida, haz clic para reproducir.");
    });

    // Opcional: Permitir que el usuario haga clic para reproducir
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log("No se pudo reproducir la música al hacer clic.");
            });
        }
    });
});
