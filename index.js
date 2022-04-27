// PASSO 1
function Aluno(nome, faltas, notas) {
    this.nome = nome
    this.faltas = faltas
    this.notas = notas
    
// PASSO 2
    this.calcularMedia = function () {
            const soma = this.notas.reduce(function (acc, valorAtual) {
                return acc + valorAtual
            })
            return soma / this.notas.length
        },
        this.adicionaFalta = function () {
            return ++this.faltas;
        }
}

const aluno1 = new Aluno('Raphael', 4, [7.5, 8.5, 9, 8])
const aluno2 = new Aluno('Maria', 6, [8.5, 8.5, 9, 10])


// PASSO 3
let curso = {
    nome: 'DH',
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: [aluno1, aluno2],

// PASSO 4
    adicionarAluno(nome, faltas, notas) {
        const aluno = new Aluno(nome, faltas, notas);
        this.listaEstudantes.push(aluno)
    },

// PASSO 5
    verificaAprovacao(aluno) {
        let media = this.listaEstudantes[aluno].calcularMedia()
        let faltaMais1 = this.listaEstudantes[aluno].adicionaFalta()
        if (media >= this.notaAprovacao && faltaMais1 < this.faltasMaximas) {
            return this.listaEstudantes[aluno].nome + ' esta aprovado(a)';
        } else if (faltaMais1 == this.faltasMaximas && this.notaAprovacao * 1.1 < media) {
            return this.listaEstudantes[aluno].nome + ' esta aprovado(a)';
        } else {
            return this.listaEstudantes[aluno]['nome'] + ' esta reprovado(a)';
        }
    },

// PASSO 6
    verificaAprovacoes() {
        let alunosAprovados = []
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            let media = this.listaEstudantes[i].calcularMedia()
            let faltaMais1 = this.listaEstudantes[i].adicionaFalta()
            if (media >= this.notaAprovacao && faltaMais1 < this.faltasMaximas) {
                alunosAprovados.push(this.listaEstudantes[i].nome + ' esta aprovado(a)');
            } else if (faltaMais1 == this.faltasMaximas && this.notaAprovacao * 1.1 < media) {
                alunosAprovados.push(this.listaEstudantes[i].nome + ' esta aprovado(a)');
            } else {
                alunosAprovados.push(this.listaEstudantes[i]['nome'] + ' esta reprovado(a)');
            }
        }
        return alunosAprovados;
    }

}



// REFERENTE AO PASSO 4, CRIANDO OS OBJETOS DENTRO DO ARRAY listaEstudantes
curso.adicionarAluno('Felipe', 2, [5, 6, 7, 8])
curso.adicionarAluno('Marcos', 0, [4, 5, 9, 7])
curso.adicionarAluno('Dayana', 1, [7, 9, 9.5, 5])
curso.adicionarAluno('Adrielly', 3, [8, 7, 6.5, 9])

// REFERENTE AO PASSO 5, VERIFICANDO INDIVIDUALMENTE CADA ALUNO, SE ESTA OU NÃO APROVADO
// EXISTE O PARÂMETRO aluno NO MÉTODO verificaAprovacao(aluno), PODENDO PASSAR POSIÇÕES DO ARRAY listaEstudantes 
// ASSIM, MUDANDO DINAMICAMENTE O BLOCO DO MÉTODO!
// console.log(curso.verificaAprovacoes())


// REFERENTE AO PASSO 6, VERIFICANDO TODOS OS ALUNOS DE FORMA AUTOMATICA, E COLOCANDO O RESULTADO
// SE ESTA OU NÃO APROVADO DENTRO DE UM ARRAY
console.log(curso.verificaAprovacao(4))
