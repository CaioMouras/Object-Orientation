class Animal {
    constructor(cor, tamanho, peso) {
      this.cor = cor
      this.tamanho = tamanho
      this.peso = peso
    }
    
    dormir() {
      console.log('Dormir')
    }
  }
  
  
  class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
      super(cor, tamanho, peso)
      this.bico = bico
    }
    
    voar() {
      console.log('Voar')
    }
  }
  
  class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
      super('Médio', cor, tamanho, peso)
      this.sabeFalar = sabeFalar
    }
    falar() {
      console.log('Falar')
    }
  }
  
  class Avestruz extends Passaro {
    constructor() {
     super('Grande', 'Branco e preto', 250, 15000)
    }
    enterrarCabeça() {
      console.log('Enterrar a cabeça')
    }
    voar() {
      console.log('Não sabe voar')
    }
  }
  
  let papagaio = new Papagaio(true, 'verde', 25,350)
  console.log(papagaio)
  
  papagaio.voar()
  
  let avestruz = new Avestruz()
  avestruz.enterrarCabeça()
  avestruz.voar()