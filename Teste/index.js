function somarEmostrar(){
    let a = document.querySelector('#PrimeiroNumero').value
    let b = document.querySelector('#segundoNumero').value
    let resultado = document.querySelector('.resultado')
  
    if (Number(a) || Number(b) != 0){
        resultado.innerHTML = ''
        resultado.innerHTML += ` A soma de ${Number(a)} + ${Number(b)} é igual á ${Number(a) + Number(b)}`
    }else{
        window.alert("Soma invalida")
    }
    // console.log(Number(a)+Number(b))
    
    
    
}