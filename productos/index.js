
// Seleccionar todas las clases que tienen el nombre "detalle-button"
const detalleButtons = document.querySelectorAll(".detalle-button");

// Asignar evento click a cada botón
detalleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const detalleNumber = button.getAttribute("data-detalle"); //traer el valor del atributo personalizado
        const modal = document.querySelector(`.modal${detalleNumber}`);
        if (modal) {
            modal.classList.add("is-active");
        }
    });
});

// Asignar evento para cerrar los modales al hacer clic en el fondo
const modals = document.querySelectorAll(".modal");
cont = 0
modals.forEach(modal => {
    const background = modal.querySelector(".modal-background");
    background.addEventListener("click", () => {
        modal.classList.remove("is-active");
        
    });
    
});

