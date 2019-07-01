const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const apenasFragil = produto => produto.fragil
const apenasCaros = produto => produto.preco >= 500

const resultado = produtos.filter(apenasFragil).filter(apenasCaros)

console.log(resultado)

