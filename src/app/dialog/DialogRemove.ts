import {$} from '@/facade'
import {IResource} from '@simpli/resource-collection'
import {Dialog} from '@/app/dialog/Dialog'

export class DialogRemove extends Dialog {
  constructor(public resource: IResource) {
    super()
    this.title = $.t('system.question.confirmRemove') as string
    this.message = resource.$tag
  }
}
