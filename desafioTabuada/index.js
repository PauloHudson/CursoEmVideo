function GerarTabuada(){
    let valor = document.getElementById('digite')
    //
    let tabuada = document.getElementById('seltab')

    //se não tiver um numero ele da o alert.
    if (valor.value.length == 0){
        window.alert('Digite um valor')
    }else{
        let n = Number(valor.value)
        //para limpar a tabuada
        //sem isso ele iria sobrescrever cada valor.
        tabuada.innerHTML = ''
        for(let i = 1; i < 10; i++){
            let items = document.createElement('option')
            items.text = `${n} x ${i} = ${n*i}`
            items.value = `tab${i}`
            tabuada.appendChild(items)
            
        
        }
    }
    

}