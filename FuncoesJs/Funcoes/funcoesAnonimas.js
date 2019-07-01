//Função anônima é uma função sem nome e pode ser usada de diversas formas, como nos exemplos
const soma = function (x, y) { 
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ //3 Parâmetro (operacao) caso não receba nada assume a função soma
    console.log(operacao(a, b)) //Chama a operacao que foi passada e coloca a e b como parâmetros
}

imprimirResultado(3,4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { //Função anônima como parâmetro 
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //Função anônima arrow como parâmetro, como exite 2 parâmetros não pode tirar os ( )

const pessoa = {
    falar: function() { //Função anônima dentro do objeto
        console.log('Opa')
    }
}

pessoa.falar()