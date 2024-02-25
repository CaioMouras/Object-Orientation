let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 150
    this.velocidadeMaxima = 180
    
    this.acelerar = function() {
      let velocidade = this.getVelocidadeAtual() + 10
      if(velocidade > this.velocidadeMaxima) {
        velocidade = this.velocidadeMaxima
      }
      this.setVelocidadeAtual(velocidade)
      console.log('Acelerou')
    }
    
    this.getVelocidadeAtual = function() {
      return this.velocidadeAtual
    }
    
    this.setVelocidadeAtual = function(velocidadeAtual) {
      this.velocidadeAtual = velocidadeAtual
    }
  }
  
  /*
  let carro = new Carro()
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.velocidadeMaxima = 230
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  */
  
  let Carro2 = function() {
    
    var velocidadeMaxima = 180
    var quilometrosRodados = 0
    
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 150  
    this.acelerar = function() {
      let velocidade = this.getVelocidadeAtual() + 10
      if(velocidade > velocidadeMaxima) {
        velocidade = velocidadeMaxima
      }
      this.setVelocidadeAtual(velocidade)
      console.log('Acelerou')
      setQuilometrosRodados(0.07)
      console.log(`Você andou ${quilometrosRodados} Km`)
    }
    
    this.getVelocidadeAtual = function() {
      return this.velocidadeAtual
    }
    
    this.setVelocidadeAtual = function(velocidadeAtual) {
      this.velocidadeAtual = velocidadeAtual
    }
    
    var setQuilometrosRodados =  function(q) {
      quilometrosRodados += q
    }
  }
  
  let carro2 = new Carro2()
  carro2.acelerar()
  console.log(`Você está a ${carro2.velocidadeAtual} Km/h`)
  carro2.acelerar()
  console.log(`Você está a ${carro2.velocidadeAtual} Km/h`)
  carro2.acelerar()
  console.log(`Você está a ${carro2.velocidadeAtual} Km/h`)
  carro2.acelerar()
  console.log(`Você está a ${carro2.velocidadeAtual} Km/h`)
  carro2.acelerar()
  