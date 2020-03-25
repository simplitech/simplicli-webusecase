import {$} from '@/config/framework.config'

export function push(uri: string) {
  return $.router.push(uri)
}

export function replace(uri: string) {
  return $.router.replace(uri)
}

export async function pushByName(name: string, ...ids: number[]) {
  const params: any = {}

  if (ids.length > 1) {
    ids.forEach((id, index) => (params[`id${index + 1}`] = id))
  } else if (ids.length === 1) {
    params.id = ids[0]
  }

  await $.router.push({name, params})
}

export function openUrl(url: string, targetBlank?: boolean) {
  return window.open(url, targetBlank ? '_blank' : '_self')
}

export function historyBack() {
  return window.history.back()
}
