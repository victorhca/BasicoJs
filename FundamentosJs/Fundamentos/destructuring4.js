//Criação de uma função que recebe um objeto e já possui valores padrões pre definidos
//dando possibilidade de uso do método passando objeto vazio e trata caso os valores não chegem como esperado

function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
//console.log(rand()) //Método vazio ocorre o erro