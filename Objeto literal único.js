let assinatura = {
    idCliente: 10000,
    descricao: 'Acesso a internet',
    status() {
      console.log('Ativo')
    }
  }
  
  console.log(assinatura.descricao)
  
  let y = assinatura
  
  console.log(y.descricao)