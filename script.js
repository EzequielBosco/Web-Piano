const tecla = document.querySelectorAll(".teclas")

tecla.forEach(key => {
    key.addEventListener("click", () => {
        console.log(key.dataset.key)
    })
})

const letras = document.querySelectorAll(".ocultar")

const mostrarLetras = document.getElementById("mostrar")
mostrarLetras.addEventListener("click", () => {
    letras.forEach(letra => {
        letra.classList.remove("ocultar")
    })
})

const ocultarLetras = document.getElementById("ocultar")
ocultarLetras.addEventListener("click", () => {
    letras.forEach(letra => {
        letra.classList.add("ocultar")
    })
})