import {$} from '@/config/framework.config'
import {IResource} from '@simpli/resource-collection'
import {Dialog} from '@/helpers/dialog/Dialog'

export class DialogRemove extends Dialog {
  constructor(public resource: IResource) {
    super()
    this.title = $.t('system.question.confirmRemove') as string
    this.message = resource.$tag
  }
}
