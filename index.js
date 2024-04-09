let button = document.getElementById('button')
let form = document.getElementById('form')

button.addEventListener('click', e => {
    let tokenPorSegundo = document.getElementById('idToken')
    let custoHoraVM = document.getElementById('idCusto')
    let milhaoToken = 1000000
    let totalSegundo = milhaoToken/tokenPorSegundo.value
    let totalTokenHora = totalSegundo/3600
    let custoMilhaoTokenNossaVM = (custoHoraVM.value)*totalTokenHora

    console.log('custo do milhao de token na nossa VM: ' + custoMilhaoTokenNossaVM.toFixed(2))
    alert('custo do milhao de token na nossa VM: ' + custoMilhaoTokenNossaVM.toFixed(2))
})

form.addEventListener("submit", (e) => {
    e.preventDefault
})