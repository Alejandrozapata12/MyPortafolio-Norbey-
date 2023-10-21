// Obtener elementos del DOM
const openModalBtn = document.getElementById('openModalBtn');
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.querySelector('.close');

// Función para abrir el modal
function openModal() {
    contactModal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    contactModal.style.display = 'none';
}

// Agregar eventos a los botones
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Cerrar el modal haciendo clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        closeModal();
    }
});

// Evitar que el formulario se envíe (solo para este ejemplo)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado. Esta es solo una demostración.');
    closeModal();
});
