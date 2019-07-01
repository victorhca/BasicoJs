class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome        
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){//...lancamentos -> receber um ou mais lançamentos
        lancamentos.forEach(l => this.lancamentos.push(l)) //Percorrer os elementos do array e dando push neles
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { //Realizando a soma dos lançamentos
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())