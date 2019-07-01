const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen')//Adiciona no final 
console.log(pilotos)

 pilotos.shift() //Remove o primeiro
 console.log(pilotos)

 pilotos.unshift('Hamilton') //Adiciona no início 
 console.log(pilotos)

 pilotos.splice(2, 0, 'Bottas', 'Massa') //Adicionar a partir do índice 2 
 console.log(pilotos)

 pilotos.splice(3, 1) //Remover a partir do índice 3 somente 1 elemento
 console.log(pilotos)

 const algunsPilotos1 = pilotos.slice(2) //retorna um novo array a partir do índice informado
 console.log(algunsPilotos1)

 const algunsPilotos2 = pilotos.slice(1, 4) //Retorna um novo array com intervalo de valor
 console.log(algunsPilotos2)