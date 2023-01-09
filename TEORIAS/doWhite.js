//a repetição vai acontecer enquanto for verdade, quando for false ele para. 
//ex com uma pizza



//looping até acabar a pizza, quando não tiver fatia ele vira false e acaba o looping.

/*function comerPizza(){
    while(temfatia()){
        comerFatia()
    }
}


//estrutura de repetição com teste lógico no ínicio.
//primeiro testa, depois executa o bloco
*/
let c = 1

while(c < 6){
    console.log('tudo bem')
    c++
}
//primeiro executa o bloco depois ele testa;

//estrutura de repetição com teste lógico no final.
let d = 1

do{
    console.log('olá')
    d++
}   while(d <= 6)






//exemplo com for.

let x = 10
for(a = 0; a < x; a++){
    console.log(a+1)
}