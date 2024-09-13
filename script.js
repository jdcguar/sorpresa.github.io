document.getElementById('openButton').addEventListener('click', function() {
    document.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
});

document.getElementById('playMusic').addEventListener('click', function() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
        this.textContent = 'Pausar Música';
    } else {
        music.pause();
        this.textContent = 'Reproducir Música';
    }
});

function abrirPagina() {
            window.location.href = 'hola.html';
        }