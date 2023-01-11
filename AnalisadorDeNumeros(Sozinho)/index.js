var array = []
function AddSelect(){

    let valorNumeros = document.getElementById('adicionar')
    var valor = Number(valorNumeros.value)
    //
    let selector = document.getElementById('selecionar')

    if(valor < 1 || valor > 100){
        window.alert('Numero inválido')
    }else{
        array.push(valor)
        let elementos = document.createElement('option')
        elementos.text = `Adicionado O número ${valor}`
        selector.appendChild(elementos)
    }
    
}
function Finalizar(){
    let resposta = document.getElementById('resposta')
    // pegando a soma de todos os valores...
    let contador = 0
    for(let i = 0; i < array.length; i++){
        contador += array[i]
    }
    // pegando a media
    let media = (contador / array.length)
    //maior valor
    let max = Math.max(...array)
    //menor valor
    let min = Math.min(...array)

    resposta.innerHTML = ''
    resposta.innerHTML += `Ao todo temos ${array.length} Numeros Cadastrados <br> <br>`
    resposta.innerHTML += `Somando Todos Os valores temos ${contador} <br> <br>`
    resposta.innerHTML += `A média dos Valores é ${media.toFixed(2)} <br> <br>`
    resposta.innerHTML += `O maior Valor é  ${max} <br> <br>`
    resposta.innerHTML += `O Menor Valor é  ${min} <br> <br>`
}
