// Botões
const btnTeclado = document.querySelectorAll(".btnTeclado")
const btnConfirmar = document.getElementById("btnConfirmar")
const btnCorrigir = document.getElementById("btnCorrigir")

// Mensagens
const msgValidacao = document.querySelector(".msgValidacao")
const msgErro = document.querySelector(".msgErro")

// Output da senha digitada
let h3Senha = document.getElementById("h3Senha")

for (let i = 0; i < btnTeclado.length; i++) {
    btnTeclado[i].addEventListener("click", () => {
        let nums = Number(btnTeclado[i].innerHTML)
        h3Senha.textContent += nums
        console.log(h3Senha.textContent)
    })
}


btnConfirmar.addEventListener("click", () => {
    validaSenha()
})


function validaSenha() {
    /*Senha padrão para acesso e simulação */
    let senha = 1234
    let nums = Number(h3Senha.innerText)
    console.log(nums)

    if (nums.length < 3 || nums != senha) {
        btnConfirmar.setAttribute("style", "color: red")
        msgErro.style.display = "block"
        setTimeout(() => {
            btnConfirmar.setAttribute("style", "color: black")
            msgErro.style.display = "none"
            h3Senha.innerHTML = ""
        }, 3000)

    } else {
        btnConfirmar.setAttribute("style", "color: green")
        msgValidacao.style.display = "block"
        setTimeout(() => {
            btnConfirmar.setAttribute("style", "color: black")
            msgValidacao.style.display = "none"
            h3Senha.innerHTML = ""
            window.location.href = "http://127.0.0.1:5500/index/compraFinalizada.html"
        }, 3000);

    }
}


btnCorrigir.addEventListener("click", ()=>{
    h3Senha.innerHTML = ""
})
