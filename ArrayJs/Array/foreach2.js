//Criação manual de um método forEach

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i <= this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ //Parâmetros do forEach: Nome, Indice e Array, caso queira o 2 param é necessário informar o primeiro 
    console.log(`${indice + 1}) ${nome}`)
})