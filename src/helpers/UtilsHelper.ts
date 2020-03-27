import {classToClass, ClassTransformOptions} from 'class-transformer'
import {sha256} from 'js-sha256'
const shortid = require('shortid')

export abstract class UtilsHelper {
  static sha256(hash?: string | null) {
    if (hash) {
      return sha256(hash)
    }

    return null
  }

  static uid(prefix?: string, suffix?: string) {
    return `${prefix || ''}${shortid.generate()}${suffix || ''}`
  }

  static sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  static clone<T>(fromEntity: T, options?: ClassTransformOptions): T {
    return classToClass(fromEntity, options)
  }
}
