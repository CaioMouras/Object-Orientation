let pessoas = {
    nome: 'josé',
    idade: 45
  }
  
  console.log(pessoas.nome)
  console.log(pessoas.idade)
  
  pessoas.nome = 'Fernanda'
  pessoas.idade = 32
  
  console.log(pessoas.nome)
  console.log(pessoas.idade)
  
  //---------------------------------------------------
  
  let pessoa = {
    nome: 'Maria',
    idade: 25
  }
  
  console.log(pessoa)
  
  
  pessoa.sexo = 'Feminino'
  console.log(pessoa)
  
  pessoa.dizerOi = () => console.log('Olá, tudo bem?')
  
  pessoa.dizerOi()
  