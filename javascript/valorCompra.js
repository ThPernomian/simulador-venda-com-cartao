const btnTeclado = document.querySelectorAll(".btnTeclado")
const btnCorrigir = document.getElementById("btnCorrigir")
const btnConfirmar = document.getElementById("btnConfirmar")

const valorPago = document.getElementById("valorPago")

for(let i = 0; i < btnTeclado.length; i++){

    btnTeclado[i].addEventListener("click", ()=>{
        let btns = btnTeclado[i].innerHTML
        valorPago.textContent += btns
        console.log(valorPago.textContent)
    })
}

btnConfirmar.addEventListener("click", ()=>{
    window.location.href = "http://127.0.0.1:5500/index/senhaCartao.html"
})


btnCorrigir.addEventListener("click", ()=>{
    valorPago.innerHTML = ""
})



