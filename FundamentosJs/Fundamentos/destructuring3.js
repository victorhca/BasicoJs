//Criação de uma função que recebe um objeto e já possui valores padrões pre definidos
//dando possibilidade de uso do método passando objeto vazio

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math. floor(valor)
}

const obj = {max: 50, min: 40}
console. log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) //Método sem passar objeto, ocorre o erro
