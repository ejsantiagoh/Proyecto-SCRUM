///Modal

// const modal = document.querySelector(".modal");
// const modabg = document.querySelector(".modal-background");
// const btnsigin = document.querySelector("#sigin");

// btnsigin.addEventListener("click",()=>{
//     modal.classList.add("is-active")
// })

// modabg.addEventListener("click",()=>{
//     modal.classList.remove("is-active")
// })

//signin

// Seleccionar todos los botones con la clase "detalle-button"
const detalleButtons = document.querySelectorAll(".detalle-button");

// Asignar evento click a cada botón
detalleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const detalleNumber = button.getAttribute("data-detalle");
        const modal = document.querySelector(`.modal${detalleNumber}`);
        console.log(detalleNumber)
        if (modal) {
            modal.classList.add("is-active");
        }
    });
});

// Asignar evento para cerrar los modales al hacer clic en el fondo
const modals = document.querySelectorAll(".modal");
modals.forEach(modal => {
    const background = modal.querySelector(".modal-background");
    background.addEventListener("click", () => {
        modal.classList.remove("is-active");
    });
});
