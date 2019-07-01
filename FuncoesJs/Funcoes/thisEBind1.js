const pessoa = {
    saudacao: 'Bom dia!', 
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar //Guardando o valor dentro de uma variável
falar() //Conflito entre paradigmas: funciona e OO. Ele não sabe quem é o this

const falaDePessoa = pessoa.falar.bind(pessoa) //No bind passamos de onde o this vai pegar 
falaDePessoa()
