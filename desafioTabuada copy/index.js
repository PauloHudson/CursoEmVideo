function tabuada(){
    let number = document.getElementById('number')
    let resposta = document.getElementById('tabuada')
    if(Number(number.value) == 0){
        window.alert('Numero inválido')
    }else{
        resposta.innerHTML = ''
        for(let i = 1; i < 11; i++){
            //estou criando um novo item(option) para cada valor.
            let item = document.createElement('option')
            //aqui estamos atribuindo valor as options.
            item.text = `${Number(number.value)} x ${i} = ${Number(number.value)*i}`
            //final colocamos tudo dentro do select respota.
            resposta.appendChild(item)
        }
    }



}
