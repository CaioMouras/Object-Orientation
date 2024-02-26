//destructuring

//let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

// let [a, b, ,c] = frutas // pular um indice
//let [ a, b = 'Abacate', c, d, e = 'Banana'] = frutas

//console.log(a,b,c,d,e)
/*let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José','Maria']]
let [[ , ,c], x] = coisas

console.log(c, x)
*/
/*
let produto = {
  descricao: 'Notebook',
  preco: 1800,
  detalhes: {
    fabricante: 'abc',
    modelo: 'xyz'
  }
}

//token
//array => []
//objeto => {}

//let {descricao: d, preco: p, desconto = 5} = produto
let {detalhes: {fabricante, modelo} } = produto

console.log(fabricante, modelo)
*/

/*
let arr = [10, 20, 30, 40]

function teste([a, b, ,c, d = 100]) {
  console.log(a, b, c, d)
}

teste(arr)
*/
/*
//objeto
let obj = {
  a: 10,
  b:20,
  c:20,
  d:40
}

function teste({a: x, d, z = 10}) {
  console.log(x,d, z)
}

teste(obj)
*/
/*
// destructuring parte 04
//array
let arr = [10, 20, 30, 40]

let [a, ...resto] = arr

console.log(a, resto)
*/

let obj = {
    a: 10, b:20, c:30, d:40
  }
  
  let {a, ...z} = obj
  
  console.log(a,z)