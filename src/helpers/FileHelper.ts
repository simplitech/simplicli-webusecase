import {snakeCase, mapKeys} from 'lodash'
import {unparse} from 'papaparse'
import {$} from '@/facade'
import {Dictionary, FieldData} from '@simpli/meta-schema'
import {DefaultSchema} from '@/schema/DefaultSchema'
import Compressor from 'compressorjs'

export abstract class FileHelper {
  static downloadCsv<M>(
    list: M[],
    schema: DefaultSchema,
    customTitle?: string
  ): void {
    if (list.length) {
      const title = customTitle
        ? `${customTitle}.csv`
        : `${snakeCase(schema.name || 'document')}.csv`
      this.createCsvFile(title, this.toCsv(list, schema))
    }
  }

  static toCsv<M>(list: M[], schema: DefaultSchema): string {
    return unparse(this.toList(list, schema))
  }

  static toList<M>(
    list: M[],
    schema: DefaultSchema
  ): Array<Dictionary<FieldData>> {
    return list
      .map(item => this.getModelData(item, schema))
      .map(data =>
        // Translate the keys
        mapKeys(data, (val, fieldName) => schema.translateFrom(fieldName))
      )
  }

  static getModelData<M>(
    model: M,
    schema: DefaultSchema
  ): Dictionary<FieldData> {
    const data: Dictionary<FieldData> = {}

    for (const field of schema.allFields) {
      data[field] = schema.build(model, field).getData()
    }

    return data
  }

  static createCsvFile(filename: string, csvStr: string) {
    const csvData = new Blob([`\uFEFF${csvStr}`], {
      type: 'text/csv;charset=utf-8;',
    })
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(csvData, filename)
    } else {
      const link = document.createElement('a')
      // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(csvData)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  static canvasToBlob(canvas: HTMLCanvasElement) {
    return new Promise<Blob | null>(resolve => {
      canvas.toBlob((blob: Blob | null) => {
        resolve(blob)
      })
    })
  }

  static compressImage(file: Blob | File, options: Compressor.Options) {
    return new Promise<Blob>(resolve => {
      const success = (file: Blob) => resolve(file)
      return new Compressor(file, {...options, ...{success}})
    })
  }

  static getExtension(file: Blob | File) {
    return file.type.includes('jpeg') ? 'jpg' : file.type.split('/')[1]
  }

  static uniqueFilename(file: Blob | File, prefix = '') {
    const extension = this.getExtension(file)
    return $.utils.uid(`${prefix}_`, extension)
  }

  static async uploadImage(
    file: Blob | File,
    uploadUrl: string,
    options: Compressor.Options = {}
  ) {
    const blob = await this.compressImage(file, options)

    // @ts-ignore
    const arrBuffer = await blob.arrayBuffer()

    await fetch(uploadUrl, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'content-type': 'application/octet-stream',
        'sec-fetch-mode': 'cors',
      },
      body: arrBuffer,
    })

    return uploadUrl.split('?')[0]
  }
}
