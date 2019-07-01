console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //Menos usual
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //Mais usado para substituir valor
aprovados.push('Abia') //Adicionar novo elemento na última posição -> Mais usual
console.log(aprovados.length)

aprovados[9] = 'Rafael' //Adicionar um valor saltando índices
console.log(aprovados.length) // Os índices saltados ficarão como undefined
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Método que realiza a ordenação 
console.log(aprovados)

delete aprovados[1] //O elemento é excluído porem não reordena o array, ele irá colocar undefined na posição 
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //Primeiro elemento: índice inicial Segundo elemento: até qual índice irá excluir
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') //Removendo 2 elementos e adicionando dois elementos 
aprovados.splice(1, 0, 'Elemento 1', 'Elemento 2') //Não remove nenhum e adc dois elementos a partir do índice 1 
console.log(aprovados)