let button = document.getElementById('button')
let form = document.getElementById('form')

button.addEventListener('click', e => {
    calcular()
}
    
function calcular() {
    let tokenPorSegundo = document.getElementById('idToken')
    let custoHoraVM = document.getElementById('idCusto')
    let milhaoToken = 1000000
    let totalSegundo = milhaoToken/tokenPorSegundo.value
    let totalTokenHora = totalSegundo/3600
    let custoMilhaoTokenNossaVM = (custoHoraVM.value)*totalTokenHora
    let custoResultado = document.getElementById('custoResultado')
    if (custoMilhaoTokenNossaVM < 10) {
        custoResultado.innerHTML = "Custo por 1M de tokens: $0" + custoMilhaoTokenNossaVM.toFixed(2)
    } else {
        custoResultado.innerHTML = "Custo por 1M de tokens: $" + custoMilhaoTokenNossaVM.toFixed(2)
    }

    console.log('custo do milhao de token na nossa VM: ' + custoMilhaoTokenNossaVM.toFixed(2))
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    calcular()
})
