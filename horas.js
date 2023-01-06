//dar bom dia boa tarde boa noite
let agora = new Date()
let horas = agora.getHours()
function horasX(){
    if(horas < 12){
        console.log('Bom Dia')
    }else if(horas < 18){
        console.log('Boa Tarde')
    }else{
        console.log('Boa Noite')
    }
}

horasX()