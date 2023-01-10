function contar(){
    let start = document.getElementById('inicio')
    let end = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('res')

    if(start.value.length == 0 || end.value.length == 00 || passo.value.length == 0){
        resultado.innerText = 'Impossível Contar'
        window.alert("Digite Valores Válidos")
    }else{
        resultado.innerText = 'Contando:'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(passo.value)
        //contador crescente.
        if(i < f){
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{1f449} ` 
            }
        //contador decrescente.
        //quando o passo for menor que o fim.
        }else{
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} \u{1f449} `
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
    }

   
}
