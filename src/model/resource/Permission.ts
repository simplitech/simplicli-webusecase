/**
 * Permisison
 * @author Simpli CLI generator
 */

/* TODO: review generated class */
import {ResponseSerialize} from '@simpli/serialized-request'
import {PermissionGroup} from '@/app/PermissionGroup'
import {User} from '@/model/resource/User'
import {Role} from '@/model/resource/Role'

export class Permission extends PermissionGroup {
  idPermissionPk: number = 0

  @ResponseSerialize(Permission)
  permissions: Permission[] | null = null

  @ResponseSerialize(Role)
  roles: Role[] | null = null

  @ResponseSerialize(User)
  users: User[] | null = null

  scope: string | null = null
  name: string | null = null
  description: string | null = null
  active: boolean | null = null

  get $id() {
    return this.idPermissionPk
  }
  set $id(val) {
    this.idPermissionPk = val
  }
  get $tag() {
    return String(this.name)
  }

  static readonly FULL_CONTROL = 'full-control'

  // FULL_CONTROL
  static readonly CONECTADO_FULL_CONTROL = 'conectado-full-control'
  static readonly CONECTOR_PRINCIPAL_FULL_CONTROL =
    'conector-principal-full-control'
  static readonly ENDERECO_FULL_CONTROL = 'endereco-full-control'
  static readonly EXTENSAO_DO_PRINCIPAL_FULL_CONTROL =
    'extensao-do-principal-full-control'
  static readonly GRUPO_DO_PRINCIPAL_FULL_CONTROL =
    'grupo-do-principal-full-control'
  static readonly ITEM_DO_PRINCIPAL_FULL_CONTROL =
    'item-do-principal-full-control'
  static readonly PERMISSION_FULL_CONTROL = 'permission-full-control'
  static readonly PERMISSION_PERMISSION_FULL_CONTROL =
    'permission-permission-full-control'
  static readonly PRINCIPAL_FULL_CONTROL = 'principal-full-control'
  static readonly ROLE_FULL_CONTROL = 'role-full-control'
  static readonly ROLE_PERMISSION_FULL_CONTROL = 'role-permission-full-control'
  static readonly TAG_PRINCIPAL_FULL_CONTROL = 'tag-principal-full-control'
  static readonly TAG_FULL_CONTROL = 'tag-full-control'
  static readonly USER_FULL_CONTROL = 'user-full-control'
  static readonly USER_PERMISSION_FULL_CONTROL = 'user-permission-full-control'
  static readonly USER_ROLE_FULL_CONTROL = 'user-role-full-control'

  // READ_ALL
  static readonly CONECTADO_READ_ALL = 'conectado-read-all'
  static readonly CONECTOR_PRINCIPAL_READ_ALL = 'conector-principal-read-all'
  static readonly ENDERECO_READ_ALL = 'endereco-read-all'
  static readonly EXTENSAO_DO_PRINCIPAL_READ_ALL =
    'extensao-do-principal-read-all'
  static readonly GRUPO_DO_PRINCIPAL_READ_ALL = 'grupo-do-principal-read-all'
  static readonly ITEM_DO_PRINCIPAL_READ_ALL = 'item-do-principal-read-all'
  static readonly PERMISSION_READ_ALL = 'permission-read-all'
  static readonly PERMISSION_PERMISSION_READ_ALL =
    'permission-permission-read-all'
  static readonly PRINCIPAL_READ_ALL = 'principal-read-all'
  static readonly ROLE_READ_ALL = 'role-read-all'
  static readonly ROLE_PERMISSION_READ_ALL = 'role-permission-read-all'
  static readonly TAG_PRINCIPAL_READ_ALL = 'tag-principal-read-all'
  static readonly TAG_READ_ALL = 'tag-read-all'
  static readonly USER_READ_ALL = 'user-read-all'
  static readonly USER_PERMISSION_READ_ALL = 'user-permission-read-all'
  static readonly USER_ROLE_READ_ALL = 'user-role-read-all'

  // INSERT_ALL
  static readonly CONECTADO_INSERT_ALL = 'conectado-insert-all'
  static readonly CONECTOR_PRINCIPAL_INSERT_ALL =
    'conector-principal-insert-all'
  static readonly ENDERECO_INSERT_ALL = 'endereco-insert-all'
  static readonly EXTENSAO_DO_PRINCIPAL_INSERT_ALL =
    'extensao-do-principal-insert-all'
  static readonly GRUPO_DO_PRINCIPAL_INSERT_ALL =
    'grupo-do-principal-insert-all'
  static readonly ITEM_DO_PRINCIPAL_INSERT_ALL = 'item-do-principal-insert-all'
  static readonly PERMISSION_INSERT_ALL = 'permission-insert-all'
  static readonly PERMISSION_PERMISSION_INSERT_ALL =
    'permission-permission-insert-all'
  static readonly PRINCIPAL_INSERT_ALL = 'principal-insert-all'
  static readonly ROLE_INSERT_ALL = 'role-insert-all'
  static readonly ROLE_PERMISSION_INSERT_ALL = 'role-permission-insert-all'
  static readonly TAG_PRINCIPAL_INSERT_ALL = 'tag-principal-insert-all'
  static readonly TAG_INSERT_ALL = 'tag-insert-all'
  static readonly USER_INSERT_ALL = 'user-insert-all'
  static readonly USER_PERMISSION_INSERT_ALL = 'user-permission-insert-all'
  static readonly USER_ROLE_INSERT_ALL = 'user-role-insert-all'

  // UPDATE_ALL
  static readonly CONECTADO_UPDATE_ALL = 'conectado-update-all'
  static readonly CONECTOR_PRINCIPAL_UPDATE_ALL =
    'conector-principal-update-all'
  static readonly ENDERECO_UPDATE_ALL = 'endereco-update-all'
  static readonly EXTENSAO_DO_PRINCIPAL_UPDATE_ALL =
    'extensao-do-principal-update-all'
  static readonly GRUPO_DO_PRINCIPAL_UPDATE_ALL =
    'grupo-do-principal-update-all'
  static readonly ITEM_DO_PRINCIPAL_UPDATE_ALL = 'item-do-principal-update-all'
  static readonly PERMISSION_UPDATE_ALL = 'permission-update-all'
  static readonly PERMISSION_PERMISSION_UPDATE_ALL =
    'permission-permission-update-all'
  static readonly PRINCIPAL_UPDATE_ALL = 'principal-update-all'
  static readonly ROLE_UPDATE_ALL = 'role-update-all'
  static readonly ROLE_PERMISSION_UPDATE_ALL = 'role-permission-update-all'
  static readonly TAG_PRINCIPAL_UPDATE_ALL = 'tag-principal-update-all'
  static readonly TAG_UPDATE_ALL = 'tag-update-all'
  static readonly USER_UPDATE_ALL = 'user-update-all'
  static readonly USER_PERMISSION_UPDATE_ALL = 'user-permission-update-all'
  static readonly USER_ROLE_UPDATE_ALL = 'user-role-update-all'

  // DELETE
  static readonly CONECTADO_DELETE = 'conectado-delete'
  static readonly CONECTOR_PRINCIPAL_DELETE = 'conector-principal-delete'
  static readonly ENDERECO_DELETE = 'endereco-delete'
  static readonly EXTENSAO_DO_PRINCIPAL_DELETE = 'extensao-do-principal-delete'
  static readonly GRUPO_DO_PRINCIPAL_DELETE = 'grupo-do-principal-delete'
  static readonly ITEM_DO_PRINCIPAL_DELETE = 'item-do-principal-delete'
  static readonly PERMISSION_DELETE = 'permission-delete'
  static readonly PERMISSION_PERMISSION_DELETE = 'permission-permission-delete'
  static readonly PRINCIPAL_DELETE = 'principal-delete'
  static readonly ROLE_DELETE = 'role-delete'
  static readonly ROLE_PERMISSION_DELETE = 'role-permission-delete'
  static readonly TAG_PRINCIPAL_DELETE = 'tag-principal-delete'
  static readonly TAG_DELETE = 'tag-delete'
  static readonly USER_DELETE = 'user-delete'
  static readonly USER_PERMISSION_DELETE = 'user-permission-delete'
  static readonly USER_ROLE_DELETE = 'user-role-delete'

  // CONECTADO
  static readonly CONECTADO_READ_ID_CONECTADO_PK =
    'conectado-read-id-conectado-pk'
  static readonly CONECTADO_READ_TITULO = 'conectado-read-id-titulo'

  static readonly CONECTADO_INSERT_ID_CONECTADO_PK =
    'conectado-insert-id-conectado-pk'
  static readonly CONECTADO_INSERT_TITULO = 'conectado-insert-id-titulo'

  static readonly CONECTADO_UPDATE_ID_CONECTADO_PK =
    'conectado-update-id-conectado-pk'
  static readonly CONECTADO_UPDATE_TITULO = 'conectado-update-id-titulo'

  // CONECTADO_PRINCIPAL
  static readonly CONECTOR_PRINCIPAL_READ_TITULO =
    'conector-principal-read-titulo'
  static readonly CONECTOR_PRINCIPAL_READ_ID_PRINCIPAL_FK =
    'conector-principal-read-id-principal-fk'
  static readonly CONECTOR_PRINCIPAL_READ_ID_CONECTADO_FK =
    'conector-principal-read-id-conectado-fk'

  static readonly CONECTOR_PRINCIPAL_INSERT_TITULO =
    'conector-principal-insert-titulo'
  static readonly CONECTOR_PRINCIPAL_INSERT_ID_PRINCIPAL_FK =
    'conector-principal-insert-id-principal-fk'
  static readonly CONECTOR_PRINCIPAL_INSERT_ID_CONECTADO_FK =
    'conector-principal-insert-id-conectado-fk'

  static readonly CONECTOR_PRINCIPAL_UPDATE_TITULO =
    'conector-principal-update-titulo'
  static readonly CONECTOR_PRINCIPAL_UPDATE_ID_PRINCIPAL_FK =
    'conector-principal-update-id-principal-fk'
  static readonly CONECTOR_PRINCIPAL_UPDATE_ID_CONECTADO_FK =
    'conector-principal-update-id-conectado-fk'

  // ENDERECO
  static readonly ENDERECO_READ_ID_ENDERECO_PK = 'endereco-read-id-endereco-pk'
  static readonly ENDERECO_READ_CEP = 'endereco-read-cep'
  static readonly ENDERECO_READ_ZIPCODE = 'endereco-read-zipcode'
  static readonly ENDERECO_READ_RUA = 'endereco-read-rua'
  static readonly ENDERECO_READ_CIDADE = 'endereco-read-cidade'
  static readonly ENDERECO_READ_UF = 'endereco-read-uf'
  static readonly ENDERECO_READ_NRO = 'endereco-read-nro'
  static readonly ENDERECO_READ_LATITUDE = 'endereco-read-latitude'
  static readonly ENDERECO_READ_LONGITUDE = 'endereco-read-longitude'

  static readonly ENDERECO_INSERT_ID_ENDERECO_PK =
    'endereco-insert-id-endereco-pk'
  static readonly ENDERECO_INSERT_CEP = 'endereco-insert-cep'
  static readonly ENDERECO_INSERT_ZIPCODE = 'endereco-insert-zipcode'
  static readonly ENDERECO_INSERT_RUA = 'endereco-insert-rua'
  static readonly ENDERECO_INSERT_CIDADE = 'endereco-insert-cidade'
  static readonly ENDERECO_INSERT_UF = 'endereco-insert-uf'
  static readonly ENDERECO_INSERT_NRO = 'endereco-insert-nro'
  static readonly ENDERECO_INSERT_LATITUDE = 'endereco-insert-latitude'
  static readonly ENDERECO_INSERT_LONGITUDE = 'endereco-insert-longitude'

  static readonly ENDERECO_UPDATE_ID_ENDERECO_PK =
    'endereco-update-id-endereco-pk'
  static readonly ENDERECO_UPDATE_CEP = 'endereco-update-cep'
  static readonly ENDERECO_UPDATE_ZIPCODE = 'endereco-update-zipcode'
  static readonly ENDERECO_UPDATE_RUA = 'endereco-update-rua'
  static readonly ENDERECO_UPDATE_CIDADE = 'endereco-update-cidade'
  static readonly ENDERECO_UPDATE_UF = 'endereco-update-uf'
  static readonly ENDERECO_UPDATE_NRO = 'endereco-update-nro'
  static readonly ENDERECO_UPDATE_LATITUDE = 'endereco-update-latitude'
  static readonly ENDERECO_UPDATE_LONGITUDE = 'endereco-update-longitude'

  // EXTENSAO_DO_PRINCIPAL
  static readonly EXTENSAO_DO_PRINCIPAL_READ_ID_PRINCIPAL_FK =
    'extensao-do-principal-read-id-principal-fk'
  static readonly EXTENSAO_DO_PRINCIPAL_READ_TITULO =
    'extensao-do-principal-read-titulo'

  static readonly EXTENSAO_DO_PRINCIPAL_INSERT_ID_PRINCIPAL_FK =
    'extensao-do-principal-insert-id-principal-fk'
  static readonly EXTENSAO_DO_PRINCIPAL_INSERT_TITULO =
    'extensao-do-principal-insert-titulo'

  static readonly EXTENSAO_DO_PRINCIPAL_UPDATE_ID_PRINCIPAL_FK =
    'extensao-do-principal-update-id-principal-fk'
  static readonly EXTENSAO_DO_PRINCIPAL_UPDATE_TITULO =
    'extensao-do-principal-update-titulo'

  // GRUPO_DO_PRINCIPAL
  static readonly GRUPO_DO_PRINCIPAL_READ_ID_GRUPO_DO_PRINCIPAL_PK =
    'grupo-do-principal-read-id-grupo-do-principal-pk'
  static readonly GRUPO_DO_PRINCIPAL_READ_TITULO =
    'grupo-do-principal-read-titulo'

  static readonly GRUPO_DO_PRINCIPAL_INSERT_ID_GRUPO_DO_PRINCIPAL_PK =
    'grupo-do-principal-insert-id-grupo-do-principal-pk'
  static readonly GRUPO_DO_PRINCIPAL_INSERT_TITULO =
    'grupo-do-principal-insert-titulo'

  static readonly GRUPO_DO_PRINCIPAL_UPDATE_ID_GRUPO_DO_PRINCIPAL_PK =
    'grupo-do-principal-update-id-grupo-do-principal-pk'
  static readonly GRUPO_DO_PRINCIPAL_UPDATE_TITULO =
    'grupo-do-principal-update-titulo'

  // ITEM_DO_PRINCIPAL
  static readonly ITEM_DO_PRINCIPAL_READ_ID_ITEM_DO_PRINCIPAL_PK =
    'item-do-principal-read-id-item-do-principal-pk'
  static readonly ITEM_DO_PRINCIPAL_READ_ID_PRINCIPAL_FK =
    'item-do-principal-read-id-principal-fk'
  static readonly ITEM_DO_PRINCIPAL_READ_TITULO =
    'item-do-principal-read-titulo'

  static readonly ITEM_DO_PRINCIPAL_INSERT_ID_ITEM_DO_PRINCIPAL_PK =
    'item-do-principal-insert-id-item-do-principal-pk'
  static readonly ITEM_DO_PRINCIPAL_INSERT_ID_PRINCIPAL_FK =
    'item-do-principal-insert-id-principal-fk'
  static readonly ITEM_DO_PRINCIPAL_INSERT_TITULO =
    'item-do-principal-insert-titulo'

  static readonly ITEM_DO_PRINCIPAL_UPDATE_ID_ITEM_DO_PRINCIPAL_PK =
    'item-do-principal-update-id-item-do-principal-pk'
  static readonly ITEM_DO_PRINCIPAL_UPDATE_ID_PRINCIPAL_FK =
    'item-do-principal-update-id-principal-fk'
  static readonly ITEM_DO_PRINCIPAL_UPDATE_TITULO =
    'item-do-principal-update-titulo'

  // PERMISSION
  static readonly PERMISSION_READ_ID_PERMISSION_PK =
    'permission-read-id-permission-pk'
  static readonly PERMISSION_READ_SCOPE = 'permission-read-scope'
  static readonly PERMISSION_READ_NAME = 'permission-read-name'
  static readonly PERMISSION_READ_DESCRIPTION = 'permission-read-description'
  static readonly PERMISSION_READ_ACTIVE = 'permission-read-active'

  static readonly PERMISSION_INSERT_ID_PERMISSION_PK =
    'permission-insert-id-permission-pk'
  static readonly PERMISSION_INSERT_SCOPE = 'permission-insert-scope'
  static readonly PERMISSION_INSERT_NAME = 'permission-insert-name'
  static readonly PERMISSION_INSERT_DESCRIPTION =
    'permission-insert-description'
  static readonly PERMISSION_INSERT_ACTIVE = 'permission-insert-active'

  static readonly PERMISSION_UPDATE_ID_PERMISSION_PK =
    'permission-update-id-permission-pk'
  static readonly PERMISSION_UPDATE_SCOPE = 'permission-update-scope'
  static readonly PERMISSION_UPDATE_NAME = 'permission-update-name'
  static readonly PERMISSION_UPDATE_DESCRIPTION =
    'permission-update-description'
  static readonly PERMISSION_UPDATE_ACTIVE = 'permission-update-active'

  // PERMISSION_PERMISSION
  static readonly PERMISSION_PERMISSION_READ_ID_PERMISSION_PARENT_FK =
    'permission-permission-read-id-permission-parent-fk'
  static readonly PERMISSION_PERMISSION_READ_ID_PERMISSION_CHILD_FK =
    'permission-permission-read-id-permission-child-fk'

  static readonly PERMISSION_PERMISSION_INSERT_ID_PERMISSION_PARENT_FK =
    'permission-permission-insert-id-permission-parent-fk'
  static readonly PERMISSION_PERMISSION_INSERT_ID_PERMISSION_CHILD_FK =
    'permission-permission-insert-id-permission-child-fk'

  static readonly PERMISSION_PERMISSION_UPDATE_ID_PERMISSION_PARENT_FK =
    'permission-permission-update-id-permission-parent-fk'
  static readonly PERMISSION_PERMISSION_UPDATE_ID_PERMISSION_CHILD_FK =
    'permission-permission-update-id-permission-child-fk'

  // PRINCIPAL
  static readonly PRINCIPAL_READ_ID_PRINCIPAL_PK =
    'principal-read-id-principal-pk'
  static readonly PRINCIPAL_READ_ID_GRUPO_DO_PRINCIPAL_FK =
    'principal-read-id-grupo-do-principal-fk'
  static readonly PRINCIPAL_READ_ID_GRUPO_DO_PRINCIPAL_FACULTATIVO_FK =
    'principal-read-id-grupo-do-principal-facultativo-fk'
  static readonly PRINCIPAL_READ_TEXTO_OBRIGATORIO =
    'principal-read-texto-obrigatorio'
  static readonly PRINCIPAL_READ_UNICO = 'principal-read-unico'
  static readonly PRINCIPAL_READ_DECIMAL_OBRIGATORIO =
    'principal-read-decimal-obrigatorio'
  static readonly PRINCIPAL_READ_INTEIRO_OBRIGATORIO =
    'principal-read-inteiro-obrigatorio'
  static readonly PRINCIPAL_READ_BOOLEANO_OBRIGATORIO =
    'principal-read-booleano-obrigatorio'
  static readonly PRINCIPAL_READ_DATA_OBRIGATORIA =
    'principal-read-data-obrigatoria'
  static readonly PRINCIPAL_READ_DATAHORA_OBRIGATORIA =
    'principal-read-datahora-obrigatoris'
  static readonly PRINCIPAL_READ_ATIVO = 'principal-read-ativo'
  static readonly PRINCIPAL_READ_DATA_CRIACAO = 'principal-read-data-criacao'
  static readonly PRINCIPAL_READ_TEXTO_FACULTATIVO =
    'principal-read-texto-facultativo'
  static readonly PRINCIPAL_READ_EMAIL = 'principal-read-email'
  static readonly PRINCIPAL_READ_URL_IMAGEM = 'principal-read-url-imagem'
  static readonly PRINCIPAL_READ_URL = 'principal-read-url'
  static readonly PRINCIPAL_READ_NOME = 'principal-read-nome'
  static readonly PRINCIPAL_READ_TITULO = 'principal-read-titulo'
  static readonly PRINCIPAL_READ_CPF = 'principal-read-cpf'
  static readonly PRINCIPAL_READ_CNPJ = 'principal-read-cnpj'
  static readonly PRINCIPAL_READ_RG = 'principal-read-rg'
  static readonly PRINCIPAL_READ_CELULAR = 'principal-read-celular'
  static readonly PRINCIPAL_READ_TEXTO_GRANDE = 'principal-read-texto-grande'
  static readonly PRINCIPAL_READ_SNAKE_CASE = 'principal-read-snake-case'
  static readonly PRINCIPAL_READ_DECIMAL_FACULTATIVO =
    'principal-read-decimal-facultativo'
  static readonly PRINCIPAL_READ_INTEIRO_FACULTATIVO =
    'principal-read-interio-facultativo'
  static readonly PRINCIPAL_READ_BOOLEANO_FACULTATIVO =
    'principal-read-booleano-facultativo'
  static readonly PRINCIPAL_READ_DATA_FACULTATIVA =
    'principal-read-data-facultativa'
  static readonly PRINCIPAL_READ_DATAHORA_FACULTATIVA =
    'principal-read-datahora-facultativa'
  static readonly PRINCIPAL_READ_DATA_ALTERACAO =
    'principal-read-data-alteracao'
  static readonly PRINCIPAL_READ_PRECO = 'principal-read-preco'
  static readonly PRINCIPAL_READ_SENHA = 'principal-read-senha'

  static readonly PRINCIPAL_INSERT_ID_PRINCIPAL_PK =
    'principal-insert-id-principal-pk'
  static readonly PRINCIPAL_INSERT_ID_GRUPO_DO_PRINCIPAL_FK =
    'principal-insert-id-grupo-do-principal-fk'
  static readonly PRINCIPAL_INSERT_ID_GRUPO_DO_PRINCIPAL_FACULTATIVO_FK =
    'principal-insert-id-grupo-do-principal-facultativo-fk'
  static readonly PRINCIPAL_INSERT_TEXTO_OBRIGATORIO =
    'principal-insert-texto-obrigatorio'
  static readonly PRINCIPAL_INSERT_UNICO = 'principal-insert-unico'
  static readonly PRINCIPAL_INSERT_DECIMAL_OBRIGATORIO =
    'principal-insert-decimal-obrigatorio'
  static readonly PRINCIPAL_INSERT_INTEIRO_OBRIGATORIO =
    'principal-insert-inteiro-obrigatorio'
  static readonly PRINCIPAL_INSERT_BOOLEANO_OBRIGATORIO =
    'principal-insert-booleano-obrigatorio'
  static readonly PRINCIPAL_INSERT_DATA_OBRIGATORIA =
    'principal-insert-data-obrigatoria'
  static readonly PRINCIPAL_INSERT_DATAHORA_OBRIGATORIA =
    'principal-insert-datahora-obrigatoris'
  static readonly PRINCIPAL_INSERT_ATIVO = 'principal-insert-ativo'
  static readonly PRINCIPAL_INSERT_DATA_CRIACAO =
    'principal-insert-data-criacao'
  static readonly PRINCIPAL_INSERT_TEXTO_FACULTATIVO =
    'principal-insert-texto-facultativo'
  static readonly PRINCIPAL_INSERT_EMAIL = 'principal-insert-email'
  static readonly PRINCIPAL_INSERT_URL_IMAGEM = 'principal-insert-url-imagem'
  static readonly PRINCIPAL_INSERT_URL = 'principal-insert-url'
  static readonly PRINCIPAL_INSERT_NOME = 'principal-insert-nome'
  static readonly PRINCIPAL_INSERT_TITULO = 'principal-insert-titulo'
  static readonly PRINCIPAL_INSERT_CPF = 'principal-insert-cpf'
  static readonly PRINCIPAL_INSERT_CNPJ = 'principal-insert-cnpj'
  static readonly PRINCIPAL_INSERT_RG = 'principal-insert-rg'
  static readonly PRINCIPAL_INSERT_CELULAR = 'principal-insert-celular'
  static readonly PRINCIPAL_INSERT_TEXTO_GRANDE =
    'principal-insert-texto-grande'
  static readonly PRINCIPAL_INSERT_SNAKE_CASE = 'principal-insert-snake-case'
  static readonly PRINCIPAL_INSERT_DECIMAL_FACULTATIVO =
    'principal-insert-decimal-facultativo'
  static readonly PRINCIPAL_INSERT_INTEIRO_FACULTATIVO =
    'principal-insert-interio-facultativo'
  static readonly PRINCIPAL_INSERT_BOOLEANO_FACULTATIVO =
    'principal-insert-booleano-facultativo'
  static readonly PRINCIPAL_INSERT_DATA_FACULTATIVA =
    'principal-insert-data-facultativa'
  static readonly PRINCIPAL_INSERT_DATAHORA_FACULTATIVA =
    'principal-insert-datahora-facultativa'
  static readonly PRINCIPAL_INSERT_DATA_ALTERACAO =
    'principal-insert-data-alteracao'
  static readonly PRINCIPAL_INSERT_PRECO = 'principal-insert-preco'
  static readonly PRINCIPAL_INSERT_SENHA = 'principal-insert-senha'

  static readonly PRINCIPAL_UPDATE_ID_PRINCIPAL_PK =
    'principal-update-id-principal-pk'
  static readonly PRINCIPAL_UPDATE_ID_GRUPO_DO_PRINCIPAL_FK =
    'principal-update-id-grupo-do-principal-fk'
  static readonly PRINCIPAL_UPDATE_ID_GRUPO_DO_PRINCIPAL_FACULTATIVO_FK =
    'principal-update-id-grupo-do-principal-facultativo-fk'
  static readonly PRINCIPAL_UPDATE_TEXTO_OBRIGATORIO =
    'principal-update-texto-obrigatorio'
  static readonly PRINCIPAL_UPDATE_UNICO = 'principal-update-unico'
  static readonly PRINCIPAL_UPDATE_DECIMAL_OBRIGATORIO =
    'principal-update-decimal-obrigatorio'
  static readonly PRINCIPAL_UPDATE_INTEIRO_OBRIGATORIO =
    'principal-update-inteiro-obrigatorio'
  static readonly PRINCIPAL_UPDATE_BOOLEANO_OBRIGATORIO =
    'principal-update-booleano-obrigatorio'
  static readonly PRINCIPAL_UPDATE_DATA_OBRIGATORIA =
    'principal-update-data-obrigatoria'
  static readonly PRINCIPAL_UPDATE_DATAHORA_OBRIGATORIA =
    'principal-update-datahora-obrigatoris'
  static readonly PRINCIPAL_UPDATE_ATIVO = 'principal-update-ativo'
  static readonly PRINCIPAL_UPDATE_DATA_CRIACAO =
    'principal-update-data-criacao'
  static readonly PRINCIPAL_UPDATE_TEXTO_FACULTATIVO =
    'principal-update-texto-facultativo'
  static readonly PRINCIPAL_UPDATE_EMAIL = 'principal-update-email'
  static readonly PRINCIPAL_UPDATE_URL_IMAGEM = 'principal-update-url-imagem'
  static readonly PRINCIPAL_UPDATE_URL = 'principal-update-url'
  static readonly PRINCIPAL_UPDATE_NOME = 'principal-update-nome'
  static readonly PRINCIPAL_UPDATE_TITULO = 'principal-update-titulo'
  static readonly PRINCIPAL_UPDATE_CPF = 'principal-update-cpf'
  static readonly PRINCIPAL_UPDATE_CNPJ = 'principal-update-cnpj'
  static readonly PRINCIPAL_UPDATE_RG = 'principal-update-rg'
  static readonly PRINCIPAL_UPDATE_CELULAR = 'principal-update-celular'
  static readonly PRINCIPAL_UPDATE_TEXTO_GRANDE =
    'principal-update-texto-grande'
  static readonly PRINCIPAL_UPDATE_SNAKE_CASE = 'principal-update-snake-case'
  static readonly PRINCIPAL_UPDATE_DECIMAL_FACULTATIVO =
    'principal-update-decimal-facultativo'
  static readonly PRINCIPAL_UPDATE_INTEIRO_FACULTATIVO =
    'principal-update-interio-facultativo'
  static readonly PRINCIPAL_UPDATE_BOOLEANO_FACULTATIVO =
    'principal-update-booleano-facultativo'
  static readonly PRINCIPAL_UPDATE_DATA_FACULTATIVA =
    'principal-update-data-facultativa'
  static readonly PRINCIPAL_UPDATE_DATAHORA_FACULTATIVA =
    'principal-update-datahora-facultativa'
  static readonly PRINCIPAL_UPDATE_DATA_ALTERACAO =
    'principal-update-data-alteracao'
  static readonly PRINCIPAL_UPDATE_PRECO = 'principal-update-preco'
  static readonly PRINCIPAL_UPDATE_SENHA = 'principal-update-senha'

  // ROLE
  static readonly ROLE_READ_ID_ROLE_PK = 'role-read-id-role-pk'
  static readonly ROLE_READ_SLUG = 'role-read-slug'
  static readonly ROLE_READ_NAME = 'role-read-name'
  static readonly ROLE_READ_DESCRIPTION = 'role-read-description'
  static readonly ROLE_READ_LEVEL = 'role-read-level'
  static readonly ROLE_READ_ACTIVE = 'role-read-active'

  static readonly ROLE_INSERT_ID_ROLE_PK = 'role-insert-id-role-pk'
  static readonly ROLE_INSERT_SLUG = 'role-insert-slug'
  static readonly ROLE_INSERT_NAME = 'role-insert-name'
  static readonly ROLE_INSERT_DESCRIPTION = 'role-insert-description'
  static readonly ROLE_INSERT_LEVEL = 'role-insert-level'
  static readonly ROLE_INSERT_ACTIVE = 'role-insert-active'

  static readonly ROLE_UPDATE_ID_ROLE_PK = 'role-update-id-role-pk'
  static readonly ROLE_UPDATE_SLUG = 'role-update-slug'
  static readonly ROLE_UPDATE_NAME = 'role-update-name'
  static readonly ROLE_UPDATE_DESCRIPTION = 'role-update-description'
  static readonly ROLE_UPDATE_LEVEL = 'role-update-level'
  static readonly ROLE_UPDATE_ACTIVE = 'role-update-active'

  // ROLE_PERMISSION
  static readonly ROLE_PERMISSION_READ_ID_ROLE_FK =
    'role-permission-read-id-role-fk'
  static readonly ROLE_PERMISSION_READ_ID_PERMISSION_FK =
    'role-permission-read-id-permission-fk'

  static readonly ROLE_PERMISSION_INSERT_ID_ROLE_FK =
    'role-permission-insert-id-role-fk'
  static readonly ROLE_PERMISSION_INSERT_ID_PERMISSION_FK =
    'role-permission-insert-id-permission-fk'

  static readonly ROLE_PERMISSION_UPDATE_ID_ROLE_FK =
    'role-permission-update-id-role-fk'
  static readonly ROLE_PERMISSION_UPDATE_ID_PERMISSION_FK =
    'role-permission-update-id-permission-fk'

  // TAG_PRINCIPAL
  static readonly TAG_PRINCIPAL_READ_ID_TAG_FK = 'tag-principal-read-id-tag-fk'
  static readonly TAG_PRINCIPAL_READ_ID_PRINCIPAL_FK =
    'tag-principal-read-id-principal-fk'

  static readonly TAG_PRINCIPAL_INSERT_ID_TAG_FK =
    'tag-principal-insert-id-tag-fk'
  static readonly TAG_PRINCIPAL_INSERT_ID_PRINCIPAL_FK =
    'tag-principal-insert-id-principal-fk'

  static readonly TAG_PRINCIPAL_UPDATE_ID_TAG_FK =
    'tag-principal-update-id-tag-fk'
  static readonly TAG_PRINCIPAL_UPDATE_ID_PRINCIPAL_FK =
    'tag-principal-update-id-principal-fk'

  // TAG
  static readonly TAG_READ_ID_TAG_PK = 'tag-read-id-tag-pk'
  static readonly TAG_READ_TITULO = 'tag-read-titulo'

  static readonly TAG_INSERT_ID_TAG_PK = 'tag-insert-id-tag-pk'
  static readonly TAG_INSERT_TITULO = 'tag-insert-titulo'

  static readonly TAG_UPDATE_ID_TAG_PK = 'tag-update-id-tag-pk'
  static readonly TAG_UPDATE_TITULO = 'tag-update-titulo'

  // USER
  static readonly USER_READ_ID_USER_PK = 'user-read-id-user-pk'
  static readonly USER_READ_EMAIL = 'user-read-email'
  static readonly USER_READ_SENHA = 'user-read-senha'

  static readonly USER_INSERT_ID_USER_PK = 'user-insert-id-user-pk'
  static readonly USER_INSERT_EMAIL = 'user-insert-email'
  static readonly USER_INSERT_SENHA = 'user-insert-senha'

  static readonly USER_UPDATE_ID_USER_PK = 'user-update-id-user-pk'
  static readonly USER_UPDATE_EMAIL = 'user-update-email'
  static readonly USER_UPDATE_SENHA = 'user-update-senha'

  // USER_PERMISSION
  static readonly USER_PERMISSION_READ_ID_USER_FK =
    'user-permission-read-id-user-fk'
  static readonly USER_PERMISSION_READ_ID_PERMISSION_FK =
    'user-permission-read-id-permission-fk'

  static readonly USER_PERMISSION_INSERT_ID_USER_FK =
    'user-permission-insert-id-user-fk'
  static readonly USER_PERMISSION_INSERT_ID_PERMISSION_FK =
    'user-permission-insert-id-permission-fk'

  static readonly USER_PERMISSION_UPDATE_ID_USER_FK =
    'user-permission-update-id-user-fk'
  static readonly USER_PERMISSION_UPDATE_ID_PERMISSION_FK =
    'user-permission-update-id-permission-fk'

  // USER_ROLE
  static readonly USER_ROLE_READ_ID_USER_FK = 'user-role-read-id-user-fk'
  static readonly USER_ROLE_READ_ID_ROLE_FK = 'user-role-read-id-role-fk'

  static readonly USER_ROLE_INSERT_ID_USER_FK = 'user-role-insert-id-user-fk'
  static readonly USER_ROLE_INSERT_ID_ROLE_FK = 'user-role-insert-id-role-fk'

  static readonly USER_ROLE_UPDATE_ID_USER_FK = 'user-role-update-id-user-fk'
  static readonly USER_ROLE_UPDATE_ID_ROLE_FK = 'user-role-update-id-role-fk'
}
