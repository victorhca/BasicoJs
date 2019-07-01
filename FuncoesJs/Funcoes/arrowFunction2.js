/*Vantagem de usar arrowFunction é que ele deixa o this fixo, independente de onde o cógido for chamado
*o this sera de onde a função foi escrita e não de onde foi chamada. Diferente do exemplo no arquivo thisEBind2.js
*/
function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa