let dobro = function (a){
    return 2 * a
}

dobro = (a) => { //Se vc abrir chaves deverá usar o return
    return 2 * a
}

dobro = a => 2 * a //Return implícito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //POssui parâmetro, porem o Js não te obriga a passar o parâmetro 
console.log(ola())