//requisção http
//resposta http
let Bicicleta1 = {
    cor: 'Branca', 
    marcha: 'Única', 
    aro: 12,
    pedalar() { console.log('Metodo pedalar executado')}
  }
  
  let Bicicleta2 = {
    cor: 'Vermelha', 
    marcha: '18', 
    aro: 26,
    pedalar() { console.log('Metodo pedalar executado')}
  }
  
  console.log(Bicicleta1)
  console.log(Bicicleta2)
  
  //-------------------------------------------------------
  let BicicletaFactory = function(cor, marcha, aro) {
    //lógica
    //requisição http
    //resposta http
    return {
      cor,
      marcha, 
      aro,
      pedalar() {console.log('Método pedalar executado')}
    }
  }
  
  let Bicicleta3 = BicicletaFactory('Roxa', '18', 26)
  console.log(Bicicleta3)
  
  
  let Bicicleta4 = BicicletaFactory('Preta', '21', 29)
  console.log(Bicicleta4)
  
  //----------------------------------------------------
  
  let CarroFactory = function(cor, lugares,modelo) {
    //lógica
    return {
      cor,
      lugares,
      modelo,
      acelerar() {console.log(`Àcelerou ${modelo}`)}
    }
  }
  
  let Carro1 = CarroFactory('Amarelo', 7, "Spin")
  console.log(Carro1)