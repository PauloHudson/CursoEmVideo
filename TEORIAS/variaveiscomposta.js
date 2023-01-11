//variável simples apenas consegue contem um valor por vez
//variáveis compostas devem ser capazes de armazenar város valores em uma mesma estrutura. 
let num = [2,4,6,8,9,10]
/*function mostrar(){
for(let i = 0; i < num.length; i++){
    console.log(`${i+1}: ${num[i]} `)
}
}
*/


//in se lê dentro....
for(let e in num){
    console.log(`${e}: ${num[e]}`)
}
//procurar valores dentro do array.
//infexOf (tem o valor 8  dentro do array?) valor não chave, 
//ele retorna a posição do valor pesquisado
let post = num.indexOf(11)
if(post == -1){
    console.log("valor não encontrado")
}else{
    console.log(`Valor Encotrado na posição ${post}`)
}