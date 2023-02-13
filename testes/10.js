let notas = [10, 4, 5, 6, 1, 2, 4]
const notasBaixas = notas.filter(function(a){return a < 5 })
console.log(notasBaixas)
console.log(`Notas Baixas ${notasBaixas}`)