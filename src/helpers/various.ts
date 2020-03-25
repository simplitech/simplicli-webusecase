import {classToClass, ClassTransformOptions} from 'class-transformer'

const shortid = require('shortid')

export {sha256 as encrypt} from 'js-sha256'

export function uid(prefix?: string, suffix?: string) {
  return `${prefix || ''}${shortid.generate()}${suffix || ''}`
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function clone<T>(fromEntity: T, options?: ClassTransformOptions): T {
  return classToClass(fromEntity, options)
}
