const btnSim = document.getElementById("btnSim")
const btnNao = document.getElementById("btnNao")
const btnCorrigir = document.getElementById("btnCorrigir")

const gridContainer = document.querySelector(".gridContainer")


const msgRedirec = document.querySelector(".msgRedirec")
const msgValidacao = document.querySelector(".msgValidacao")

btnSim.addEventListener("click", ()=>{
    gridContainer.style.display = "grid"
    iptContribuinte.style.display = "block"    
})

btnNao.addEventListener("click", ()=>{
    function redirecionar(){
        if(btnNao){
            msgRedirec.style.display = "block"
            setTimeout(() => {
                msgRedirec.style.display = "none"        
            }, 5000);
        }
        /*link exemplo */
        window.location.href = "http://127.0.0.1:5500/index/valorCompra.html"


    }
    setTimeout(redirecionar, 500)
})

const btnTeclado = document.querySelectorAll(".btnTeclado")
let iptContribuinte = document.getElementById("iptContribuinte")

const btnConfirmar = document.getElementById("btnConfirmar")

/*Percorre os botões, pega o click do botão e executa o calculo*/

for(let i = 0; i < btnTeclado.length; i++){
    btnTeclado[i].addEventListener("click", ()=>{
    let nums = Number(btnTeclado[i].innerHTML)
        iptContribuinte.textContent += nums
        console.log(iptContribuinte.textContent)
    })
}

let validContribuinte = false

function validaContribuinte(){
    let nums = iptContribuinte.innerText
    console.log(nums)

    if(nums.length <= 8){
        validContribuinte = false
        btnConfirmar.setAttribute("style", "color: red")
        alert("digite ao menos 9 números") 
    }else{
        validContribuinte = true
        btnConfirmar.setAttribute("style", "color: green")
        msgValidacao.style.display = "block"
        window.location.href = "http://127.0.0.1:5500/index/valorCompra.html"
    }
}
    
btnConfirmar.addEventListener("click", ()=>{
    validaContribuinte() 
})


function limpaContribuinte(){
    let iptContribuinte = document.querySelector(".iptContribuinte")
    iptContribuinte.innerHTML = ""
}

btnCorrigir.addEventListener("click", ()=>{
    limpaContribuinte()
})

    
