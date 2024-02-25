class Produto {
    constructor(descricao, preco) {
      this.descricao = descricao
      this.preco = preco
    }
    
    verDescricao() {
      console.log(`${this.descricao} por apenas R$:${this.preco},00`)
    }
  }
  
  //--------------------------------------------
  
  let produto = new Produto('Notebook', 2200)
  produto.verDescricao()
  
  let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function() {
      console.log(`${this.descricao} por apenas R$:${this.preco},00`)
    }
  }
  
  produtoLiteral.verDescricao()
  
  //--------------------------------------------
  
  /*
  formulário -> servidor
  recupera dados e monta um objeto literal
  obj literal -> JSON -> HTTP -> server -> armazena
  */