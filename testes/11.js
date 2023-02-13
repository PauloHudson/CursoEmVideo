// construtoras.
function celular(marca, modelo, preco){
    this.marca = marca,
    this.modelo = modelo,
    this.preco = preco
}

const iphone = new celular("apple", "Iphone12ProMax", 25000)
console.log(iphone)