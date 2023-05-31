volumen = document.getElementById("volumen")
volumen.addEventListener("input", (e) => {
    audio.volume = e.target.value
})

const letras = document.querySelectorAll(".ocultar")

const mostrarLetras = document.getElementById("mostrar")
mostrarLetras.addEventListener("click", () => {
    letras.forEach(letra => {
        letra.classList.remove("ocultar")
        mostrarLetras.classList.add("ocultar")
    })
})

const ocultarLetras = document.getElementById("ocultar")
ocultarLetras.addEventListener("click", () => {
    letras.forEach(letra => {
        letra.classList.add("ocultar")
        mostrarLetras.classList.remove("ocultar")
    })
})

const teclas = document.querySelectorAll(".teclas")

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
      const teclaPresionada = tecla.getAttribute('data-key');
      sonido(teclaPresionada)
    })
})

document.addEventListener("keydown", teclaPresionada)
document.addEventListener("keyup", teclaSoltada)

let teclaMantenida = false

function teclaPresionada(e) {
    if (!teclaMantenida && e.repeat === false) {
        teclas.forEach(tecla => {
            if (tecla.dataset.key == e.key) {
                tecla.classList.add("active")
                sonido(tecla.dataset.key)
            }
        })
        teclaMantenida = true
    }
}

function teclaSoltada(e) {
    if (teclaMantenida && e.repeat === false) {
        teclas.forEach(tecla => {
            if (tecla.dataset.key == e.key) {
                tecla.classList.remove("active")
            }
        })
        teclaMantenida = false
    }
}

const audio = new Audio()

const sonido = (tecla) => {
    audio.src = `sonido/${tecla}.mp3`
    audio.play()
}