let nome = 'Caio'
let idade = 27
let sexo = 'Masculino'
let profissao = 'Desenvolvedor'

let objeto = {
  nome: nome,
  idade: idade,
  sexo: sexo,
  profissao: profissao,
  exibirResumo: function() {
    console.log(`${this.nome}, ${this.idade}, anos,       ${this.sexo} é ${this.profissao}`)
  }
}

console.log(objeto)
objeto.exibirResumo()

let objeto2 = {
  nomeTeste: nome, //nome  = nome variável / valor = valor variavel
  idade,
  sexo,
  profissao,
  exibirResumo() {
    console.log(`${this.nomeTeste}, ${this.idade}, anos,       ${this.sexo} é ${this.profissao}`)
  }
}

console.log(objeto2)
objeto2.exibirResumo()