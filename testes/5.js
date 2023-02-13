const pessoa = {
    nome: "paulo",
    idade: 20,
    logradouro:{
        rua: "abc",
        casa: 5
    }
}

const {logradouro, logradouro: {rua, casa}} = pessoa
console.log(casa)