//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5, 
    endereco: {
        logradouro: 'Rua abc',
        numero: 100
    }
}

const {nome, idade} = pessoa //Pegando os campos de pessoa
console.log(nome, idade) 

const {nome: n, idade: i} = pessoa //Pegando os campos e atribuindo a novas variáveis
console.log(n, i)

//Tentando pegar atributos que não existem em pessoa, por padrão retornaria undefined, porem
//se não vier nada coloquei para bemHumorada trazer true
const {sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

//Pegar atributos do Endereco
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Pegar atributos que não existem de forma aninhada, acontece o erro
//const {conta: {ag, num}} = pessoa
//console.log(ag, num)
