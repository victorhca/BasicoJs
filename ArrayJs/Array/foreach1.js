const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ //Parâmetros do forEach: Nome, Indice e Array, caso queira o 2 param é necessário informar o primeiro 
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado) => console.log(aprovado)
aprovados.forEach(exibirAprovados)