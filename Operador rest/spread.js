// contexto spread

//string
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//arrays
let listaCursos1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let listaCursos2 = ['Multiplataform Android/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = ['Web Completo', 'Android Completo', ...listaCursos1, ...listaCursos1]

console.log(listaCursosCompleto)

//objetos
let pessoa = {nome: 'João', idade: 27}
let clone = {endereco: 'Rua abc', ...pessoa}

console.log(clone)

//---------------------------------------------

//contexto rest

function soma(...param) {
  let resultado = 0
  
  console.log(param)
  
  param.forEach(v => resultado += v)
  
  return resultado
}

console.log(soma(3,8,5,7, -8, 10, 115))

function multiplicacao (m, ...p) {
  //console.log(m)
  let resultado = 0
  //console.log(p)
  
  p.forEach(v => resultado += m * v)
  
  return resultado
}

multiplicacao(5,7,12,3,49)
