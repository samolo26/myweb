// Selecciona el avatar y le agrega un efecto al hacer clic
document.querySelector('.avatar').addEventListener('click', () => {
    document.body.style.background = randomColor();
});

// Genera un color aleatorio
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
