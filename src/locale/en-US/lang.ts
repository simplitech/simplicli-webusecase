/**
 * @file
 * Language: English United States
 */
export default {
  app: {
    title: 'Usecase',
    subtitle: 'Admin Panel',
    logout: 'Logout',
    menu: 'Menu',
    add: 'Add',
    export: 'Export',
    select: 'Select',
    remove: 'Remove',
    confirm: 'Confirm',
    cancel: 'Cancel',
    noDataToShow: 'No data to show',
    downloadCsv: 'Download CSV',
    search: 'Search',
    submit: 'Submit',
    totalLines: '{total} total lines',
    version: 'Version',
    onlyIfWantChangePassword:
      'Fill this field only if you want to change the password',
    noResultFound: 'No result found',
    emptyList: 'List is empty',
  },

  system: {
    question: {
      confirmRemove: 'Are you sure you want to remove this item?',
    },
    info: {
      welcome: 'Welcome',
    },
    success: {
      recoverPasswordByMail: 'An E-Mail has been sent to your account',
      resetPassword: 'The password has successfully changed',
      changePassword: 'The password has successfully changed',
      persist: 'Persisted Successfully!',
    },
    error: {
      unauthorized: 'Restricted Access',
      noServer: 'Could not connect to server',
      validation: 'There are fields with validation errors',
    },
  },

  lang: {
    code: 'en-US',
    name: 'English',
    decimal: '.',
    thousands: ',',
  },

  currency: {
    USD: {
      prefix: '$',
      precision: '2',
    },
    BRL: {
      prefix: 'BRL$',
      precision: '2',
    },
  },

  country: {
    BRA: {
      name: 'Brazil',
      alpha2: 'BR',
      alpha3: 'BRA',
      lang: {
        code: 'pt-BR',
        name: 'Portuguese',
      },
    },
    USA: {
      name: 'United States',
      alpha2: 'US',
      alpha3: 'USA',
      lang: {
        code: 'en-US',
        name: 'English',
      },
    },
  },

  boolean: {
    true: 'Yes',
    false: 'No',
  },

  dateFormat: {
    date: 'MM/DD/YYYY',
    datetime: 'MM/DD/YYYY HH:mm',
    time: 'HH:mm',
  },

  mask: {
    date: '##/##/####',
    datetime: '##/##/#### ##:##',
    zipcode: '#####',
    zipcodeAlt: '#####-####',
    phone: '(###) ###-####',
    phoneAlt: '(###) ###-####',
    cpf: '###.###.###-##',
    cnpj: '##.###.###/####-##',
    rg: '##.###.###-#',
  },

  httpResponse: {
    '100': 'Continue',
    '101': 'Switching Protocol',
    '200': 'Ok',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '307': 'Temporary Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Request Entity Too Large',
    '414': 'Request URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '422': 'Unprocessable Entity',
    '429': 'Too Many Requests',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'Http Version Not Supported',
  },

  filter: {
    phone: {
      regex: '(\\d{3})(\\d{3})(\\d{4})$',
      format: '($1) $2-$3',
    },
    zipcode: {
      regex: '(\\d{5})$',
      format: '$1',
    },
  },

  view: {
    signIn: {
      title: 'Sign-in',
      signin: 'Sign in',
      forgotPassword: 'Forgot password',
    },

    recoverPasswordByMail: {
      title: 'Forgot Password',
      submit: 'Enviar',
      signIn: 'Sign-in',
    },

    resetPassword: {
      title: 'Reset Password',
      submit: 'Submit',
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
      idGrupoDoPrincipalFacultativoFk: 'Id Grupo Do Principal Facultativo Fk',
      idGrupoDoPrincipalFk: 'Id Grupo Do Principal Fk',
    },
    ListPrincipal: {
      idPrincipalPk: 'Id Principal Pk',
      grupoDoPrincipal1: 'Grupo Do Principal 1',
      grupoDoPrincipal2: 'Grupo Do Principal 2',
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
      idGrupoDoPrincipalFacultativoFk: 'Id Grupo Do Principal Facultativo Fk',
      idGrupoDoPrincipalFk: 'Id Grupo Do Principal Fk',
    },
    CsvPrincipal: {
      idPrincipalPk: 'Id Principal Pk',
      grupoDoPrincipal1: 'Grupo Do Principal 1',
      grupoDoPrincipal2: 'Grupo Do Principal 2',
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
      idGrupoDoPrincipalFacultativoFk: 'Id Grupo Do Principal Facultativo Fk',
      idGrupoDoPrincipalFk: 'Id Grupo Do Principal Fk',
    },
  },
}
