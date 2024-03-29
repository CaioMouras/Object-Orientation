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
  
  
  let  papagaio = new Papagaio(true, 'Verde', 25, 351)
  
  let  papagaio2 = new Papagaio(false, 'Branco', 10, 80)
  
  let  papagaio3 = new Papagaio(true, 'Vermelho', 35, 400)
  
  console.log(papagaio3)
