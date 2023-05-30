const tecla = document.querySelectorAll(".teclas")

tecla.forEach(key => {
    key.addEventListener("click", () => {
        console.log(key.dataset.key)
    })
})