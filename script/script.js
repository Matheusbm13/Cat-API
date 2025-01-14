let button = document.getElementById("getcat")
let textoloading = document.getElementById("textoloading")
let catcontainer = document.getElementById("imagem")

button.addEventListener("click", () => {
    textoloading.style.display = "block"
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
        catcontainer.innerHTML = ` <img src="${data[0].url}"></img>`
        
    })
})


// API DE CEP #################################################################################

let cepinput = document.getElementById("cepinput")
let buttoncep = document.getElementById("Buscarcep")

buttoncep.addEventListener("click", () => {
    fetch(`https://viacep.com.br/ws/${cepinput.value}/json`)
    .then((response) => response.json())
    .then((data) =>{
        document.getElementById("logradouro").innerText = `Rua: ${data.logradouro}`
        document.getElementById("bairro").innerText = `Bairro: ${data.bairro}`
        document.getElementById("cidade").innerText = `Cidade: ${data.localidade}`
        document.getElementById("estado").innerText = `Estado: ${data.estado}`
       

    console.log(data)  

   })

})

//API DE COTAÇÃO #################################################################################

function valoreuro(){
    fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("eurovalor").innerText = parseFloat(data.EURBRL.bid).toFixed(2)
    })
}


//DOLAR ############################################################################################

function valordolar(){
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("dolarvalor").innerText = parseFloat(data.USDBRL.bid).toFixed(2)
    })
}


//BITCOIN ###########################################################################################

function valorbtc(){
    fetch("https://economia.awesomeapi.com.br/json/last/BTC-BRL")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("btcvalor").innerText = parseFloat(data.BTCBRL.bid).toFixed(2)
    })
}