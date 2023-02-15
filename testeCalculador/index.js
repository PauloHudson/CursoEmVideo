function Tabuada(){
    let resultado = document.querySelector('.resultado')
    let valor = document.querySelector('#number').value

    if(Number(valor) != 0){
        resultado.innerHTML =''
        for(let i = 1; i < 11; i++){
            resultado.innerHTML += `<div class='calculadora'> 
                                ${Number(valor)} x ${i} = ${Number(valor) * i}<br> </div>`
        
        }
    }else{
        window.alert('valor inválido')
    }
}