// Manejo del formulario de contacto
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
    form.reset();
});

// Función para alternar el menú en pantallas pequeñas
function toggleMenu() {
    const nav = document.querySelector('.menu');
    nav.classList.toggle('active');
}
