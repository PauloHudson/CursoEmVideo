let aleatorio = Math.floor(Math.random()* 11)
let x = (a) => {
    if(a == aleatorio){
        console.log('parabéns você acertou o sorteio')
    }else{
        console.log(`tente Novamente seu palpite (${a}), Número sorteado ${aleatorio}`)
    }
}
x(2)