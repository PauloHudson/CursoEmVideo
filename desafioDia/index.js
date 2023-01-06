

function MudarGeral(){
    let pegaHora = new Date()
    let horas = pegaHora.getHours()

    let body = document.querySelector('body')
    let dia = document.querySelector('.dia')
    let tarde = document.querySelector('.tarde')
    let noite = document.querySelector('.noite')
    let horasSao = document.querySelector('.horasSao')

    if(horas < 12){
        dia.style.display = "block"
        body.style.background = 'bisque'
        horasSao.innerHTML += ` ${horas} horas da Manhã`
        //console.log('Bom Dia')
    }else if(horas < 18){
        tarde.style.display = "block"
        body.style.background = 'rgb(0, 125, 209)'
        horasSao.innerHTML += ` ${horas} horas da Tarde`
        //console.log('Boa Tarde')
    }else{
        noite.style.display = "block"
        body.style.background =  'rgb(2, 2, 41)'
        horasSao.innerHTML += ` ${horas} horas da Noite`
        //console.log('Boa Noite')
    }
}

MudarGeral()