/**
 * @file
 * Language: Portuguese Brazil
 */
export default {
  app: {
    title: 'Usecase',
    subtitle: 'Painel Admin',
    logout: 'Sair',
    menu: 'Menu',
    add: 'Cadastrar',
    export: 'Exportar',
    select: 'Selecione',
    remove: 'Remover',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    noDataToShow: 'Nenhum dado para apresentar',
    downloadCsv: 'Baixar CSV',
    search: 'Buscar',
    submit: 'Enviar',
    totalLines: '{total} entradas no total',
    version: 'Versão',
    onlyIfWantChangePassword:
      'Preencha este campo somente se quiser alterar a senha',
  },

  system: {
    question: {
      confirmRemove: 'Tem certeza que deseja remover este item?',
    },
    info: {
      welcome: 'Bem-vindo',
    },
    success: {
      recoverPasswordByMail: 'Um e-mail foi enviado à sua conta',
      resetPassword: 'Senha alterada com sucesso',
      changePassword: 'Senha alterada com sucesso',
      persist: 'Salvo com Sucesso!',
    },
    error: {
      unauthorized: 'Acesso Restrito',
      noServer: 'Não foi possível conectar ao servidor',
    },
  },

  view: {
    signIn: {
      title: 'Fazer Login',
      signin: 'Entrar',
      forgotPassword: 'Esqueci senha',
    },

    recoverPasswordByMail: {
      title: 'Esqueci senha',
      submit: 'Enviar',
      signIn: 'Fazer login',
    },

    resetPassword: {
      title: 'Resetar senha',
      submit: 'Enviar',
    },

    dashboard: {
      title: 'Dashboard',
    },
  },

  resource: {
    ConectorPrincipal: 'Conector Principal',
    User: 'User',
    Conectado: 'Conectado',
    Endereco: 'Endereco',
    GrupoDoPrincipal: 'Grupo Do Principal',
    Tag: 'Tag',
    ExtensaoDoPrincipal: 'Extensao Do Principal',
    ItemDoPrincipal: 'Item Do Principal',
    Principal: 'Principal',
  },

  schema: {
    InputAuthRequest: {
      email: 'Email',
      senha: 'Senha',
    },
    InputChangePasswordRequest: {
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password',
    },
    InputResetPasswordRequest: {
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password',
      hash: 'Hash',
    },
    InputRecoverPasswordByMailRequest: {
      email: 'Email',
    },
    ListAuthResponse: {
      token: 'Token',
      user: 'User',
    },
    CsvAuthResponse: {
      token: 'Token',
      user: 'User',
    },
    InputConectorPrincipal: {
      idPrincipalFk: 'Id Principal Fk',
      idConectadoFk: 'Id Conectado Fk',
      conectado: 'Conectado',
      principal: 'Principal',
      titulo: 'Titulo',
    },
    ListConectorPrincipal: {
      idPrincipalFk: 'Id Principal Fk',
      idConectadoFk: 'Id Conectado Fk',
      conectado: 'Conectado',
      principal: 'Principal',
      titulo: 'Titulo',
    },
    CsvConectorPrincipal: {
      idPrincipalFk: 'Id Principal Fk',
      idConectadoFk: 'Id Conectado Fk',
      conectado: 'Conectado',
      principal: 'Principal',
      titulo: 'Titulo',
    },
    InputUser: {
      idUserPk: 'Id User Pk',
      email: 'Email',
      senha: 'Senha',
    },
    ListUser: {
      idUserPk: 'Id User Pk',
      email: 'Email',
      senha: 'Senha',
    },
    CsvUser: {
      idUserPk: 'Id User Pk',
      email: 'Email',
      senha: 'Senha',
    },
    InputConectado: {
      idConectadoPk: 'Id Conectado Pk',
      titulo: 'Titulo',
    },
    ListConectado: {
      idConectadoPk: 'Id Conectado Pk',
      titulo: 'Titulo',
    },
    CsvConectado: {
      idConectadoPk: 'Id Conectado Pk',
      titulo: 'Titulo',
    },
    InputEndereco: {
      idEnderecoPk: 'Id Endereco Pk',
      cep: 'Cep',
      zipcode: 'Zipcode',
      rua: 'Rua',
      nro: 'Nro',
      cidade: 'Cidade',
      uf: 'Uf',
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    ListEndereco: {
      idEnderecoPk: 'Id Endereco Pk',
      cep: 'Cep',
      zipcode: 'Zipcode',
      rua: 'Rua',
      nro: 'Nro',
      cidade: 'Cidade',
      uf: 'Uf',
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    CsvEndereco: {
      idEnderecoPk: 'Id Endereco Pk',
      cep: 'Cep',
      zipcode: 'Zipcode',
      rua: 'Rua',
      nro: 'Nro',
      cidade: 'Cidade',
      uf: 'Uf',
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    InputGrupoDoPrincipal: {
      idGrupoDoPrincipalPk: 'Id Grupo Do Principal Pk',
      titulo: 'Titulo',
    },
    ListGrupoDoPrincipal: {
      idGrupoDoPrincipalPk: 'Id Grupo Do Principal Pk',
      titulo: 'Titulo',
    },
    CsvGrupoDoPrincipal: {
      idGrupoDoPrincipalPk: 'Id Grupo Do Principal Pk',
      titulo: 'Titulo',
    },
    InputTag: {
      idTagPk: 'Id Tag Pk',
      tagPrincipal: 'Tag Principal',
      titulo: 'Titulo',
    },
    ListTag: {
      idTagPk: 'Id Tag Pk',
      tagPrincipal: 'Tag Principal',
      titulo: 'Titulo',
    },
    CsvTag: {
      idTagPk: 'Id Tag Pk',
      tagPrincipal: 'Tag Principal',
      titulo: 'Titulo',
    },
    InputExtensaoDoPrincipal: {
      idPrincipalFk: 'Id Principal Fk',
      principal: 'Principal',
      titulo: 'Titulo',
    },
    ListExtensaoDoPrincipal: {
      idPrincipalFk: 'Id Principal Fk',
      principal: 'Principal',
      titulo: 'Titulo',
    },
    CsvExtensaoDoPrincipal: {
      idPrincipalFk: 'Id Principal Fk',
      principal: 'Principal',
      titulo: 'Titulo',
    },
    InputItemDoPrincipal: {
      idItemDoPrincipalPk: 'Id Item Do Principal Pk',
      principal: 'Principal',
      titulo: 'Titulo',
      idPrincipalFk: 'Id Principal Fk',
    },
    ListItemDoPrincipal: {
      idItemDoPrincipalPk: 'Id Item Do Principal Pk',
      principal: 'Principal',
      titulo: 'Titulo',
      idPrincipalFk: 'Id Principal Fk',
    },
    CsvItemDoPrincipal: {
      idItemDoPrincipalPk: 'Id Item Do Principal Pk',
      principal: 'Principal',
      titulo: 'Titulo',
      idPrincipalFk: 'Id Principal Fk',
    },
    InputPrincipal: {
      idPrincipalPk: 'Id Principal Pk',
      grupoDoPrincipal1: 'Grupo Do Principal 1',
      grupoDoPrincipal2: 'Grupo Do Principal 2',
      tagPrincipal: 'Tag Principal',
      textoObrigatorio: 'Texto Obrigatorio',
      inteiroObrigatorio: 'Inteiro Obrigatorio',
      unico: 'Unico',
      decimalObrigatorio: 'Decimal Obrigatorio',
      booleanoObrigatorio: 'Booleano Obrigatorio',
      dataObrigatoria: 'Data Obrigatoria',
      datahoraObrigatoria: 'Datahora Obrigatoria',
      ativo: 'Ativo',
      dataCriacao: 'Data Criacao',
      textoFacultativo: 'Texto Facultativo',
      inteiroFacultativo: 'Inteiro Facultativo',
      email: 'Email',
      urlImagem: 'Url Imagem',
      url: 'Url',
      nome: 'Nome',
      titulo: 'Titulo',
      cpf: 'Cpf',
      cnpj: 'Cnpj',
      rg: 'Rg',
      celular: 'Celular',
      textoGrande: 'Texto Grande',
      snakeCase: 'Snake Case',
      decimalFacultativo: 'Decimal Facultativo',
      booleanoFacultativo: 'Booleano Facultativo',
      dataFacultativa: 'Data Facultativa',
      datahoraFacultativa: 'Datahora Facultativa',
      dataAlteracao: 'Data Alteracao',
      preco: 'Preco',
      senha: 'Senha',
      idGrupoDoPrincipalFk: 'Id Grupo Do Principal Fk',
      idGrupoDoPrincipalFacultativoFk: 'Id Grupo Do Principal Facultativo Fk',
    },
    ListPrincipal: {
      idPrincipalPk: 'Id Principal Pk',
      grupoDoPrincipal1: 'Grupo Do Principal 1',
      grupoDoPrincipal2: 'Grupo Do Principal 2',
      tagPrincipal: 'Tag Principal',
      textoObrigatorio: 'Texto Obrigatorio',
      inteiroObrigatorio: 'Inteiro Obrigatorio',
      unico: 'Unico',
      decimalObrigatorio: 'Decimal Obrigatorio',
      booleanoObrigatorio: 'Booleano Obrigatorio',
      dataObrigatoria: 'Data Obrigatoria',
      datahoraObrigatoria: 'Datahora Obrigatoria',
      ativo: 'Ativo',
      dataCriacao: 'Data Criacao',
      textoFacultativo: 'Texto Facultativo',
      inteiroFacultativo: 'Inteiro Facultativo',
      email: 'Email',
      urlImagem: 'Url Imagem',
      url: 'Url',
      nome: 'Nome',
      titulo: 'Titulo',
      cpf: 'Cpf',
      cnpj: 'Cnpj',
      rg: 'Rg',
      celular: 'Celular',
      textoGrande: 'Texto Grande',
      snakeCase: 'Snake Case',
      decimalFacultativo: 'Decimal Facultativo',
      booleanoFacultativo: 'Booleano Facultativo',
      dataFacultativa: 'Data Facultativa',
      datahoraFacultativa: 'Datahora Facultativa',
      dataAlteracao: 'Data Alteracao',
      preco: 'Preco',
      senha: 'Senha',
      idGrupoDoPrincipalFk: 'Id Grupo Do Principal Fk',
      idGrupoDoPrincipalFacultativoFk: 'Id Grupo Do Principal Facultativo Fk',
    },
    CsvPrincipal: {
      idPrincipalPk: 'Id Principal Pk',
      grupoDoPrincipal1: 'Grupo Do Principal 1',
      grupoDoPrincipal2: 'Grupo Do Principal 2',
      tagPrincipal: 'Tag Principal',
      textoObrigatorio: 'Texto Obrigatorio',
      inteiroObrigatorio: 'Inteiro Obrigatorio',
      unico: 'Unico',
      decimalObrigatorio: 'Decimal Obrigatorio',
      booleanoObrigatorio: 'Booleano Obrigatorio',
      dataObrigatoria: 'Data Obrigatoria',
      datahoraObrigatoria: 'Datahora Obrigatoria',
      ativo: 'Ativo',
      dataCriacao: 'Data Criacao',
      textoFacultativo: 'Texto Facultativo',
      inteiroFacultativo: 'Inteiro Facultativo',
      email: 'Email',
      urlImagem: 'Url Imagem',
      url: 'Url',
      nome: 'Nome',
      titulo: 'Titulo',
      cpf: 'Cpf',
      cnpj: 'Cnpj',
      rg: 'Rg',
      celular: 'Celular',
      textoGrande: 'Texto Grande',
      snakeCase: 'Snake Case',
      decimalFacultativo: 'Decimal Facultativo',
      booleanoFacultativo: 'Booleano Facultativo',
      dataFacultativa: 'Data Facultativa',
      datahoraFacultativa: 'Datahora Facultativa',
      dataAlteracao: 'Data Alteracao',
      preco: 'Preco',
      senha: 'Senha',
      idGrupoDoPrincipalFk: 'Id Grupo Do Principal Fk',
      idGrupoDoPrincipalFacultativoFk: 'Id Grupo Do Principal Facultativo Fk',
    },
  },
}
