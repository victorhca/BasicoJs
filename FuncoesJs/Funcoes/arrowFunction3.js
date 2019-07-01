/*
* O this de uma função arrow é associado ao contexto no qual a função foi escrita e não é possível alterar 
*mesmo usando o bind como é mostrado no contexto a baixo.
*/

let comparaComThis = function (param){ //Função normal
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //Passando o objeto como sendo o this
comparaComThis(global) //Resultado será falso pois agora o this não é mais global 
comparaComThis(obj) //Resultado: true, pois setamos como  bind o this

//Como a função arrow foi criada dentro de um módulo do node, então o this passa a ser o módulo
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//False, não aponta mais para o global, por ser arrow
comparaComThisArrow(module.exports)//True pois o this é o módulo 
comparaComThisArrow(this)//True pois o this é o módulo

//Tentar mudar o this da função arrow usando o bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//False, o bind não consegue mudar o this de uma função arrow
comparaComThisArrow(module.exports)//True, o this da função arrrow ainda é o módulo