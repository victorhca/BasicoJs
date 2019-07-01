 /*Criação da constante para armazenar o Objeto do this, já que a const não irá mudar nunca,
 * sendo assim independente de quem chamar a função o self sempre vai apontar para o objeto da função
 *"driblando" o this que varia.
 */
 function Pessoa(){
     this.idade = 0

     const self = this 
     setInterval(function(){
         self.idade++ //this.idade
         console.log(self.idade)
     }/*.bind(this) */, 1000)
 }

 new Pessoa