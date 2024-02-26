/*
let quadrado = function(x = 2) {
  return x * x
}
*/
//Se for só um parâmetro não precisa dos parênteses "(x) >>>> x "
let quadrado = x => x * x //return implicito

document.write( quadrado(3))

document.write('<hr>')
/*
let parOuImpar = numero => {
  if(numero % 2 === 0) {
    return 'par'
  } else {
  return 'impar'
  }
}
*/
let parOuImpar = numero => numero % 2 === 0 ? 'par' : 'ímpar' //retorno implicito
document.write(parOuImpar(13))