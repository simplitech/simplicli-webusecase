import {SocketConnection} from '@simpli/serialized-request'
import {Dictionary} from '@simpli/vue-await/lib/Dictionary'
import {ClassType} from 'class-transformer/ClassTransformer'

export interface SocketConfig {
  baseURL?: string
}

export interface SocketInstance {
  config: SocketConfig
  connect: <T>(
    name: string,
    url: string,
    classType?: ClassType<T>
  ) => SocketConnection<T>
  disconnect: (name: string) => void
  getConnection: <T>(name: string) => SocketConnection<T> | null
  disconnectAll: () => void
}

export interface SocketStatic {
  create(config?: SocketConfig): SocketInstance
}

const socket: SocketStatic = {
  create(config: SocketConfig = {}): SocketInstance {
    const socketConnection: Dictionary<SocketConnection<any>> = {}

    const connect = <T>(
      name: string,
      url: string,
      classType?: ClassType<T>
    ) => {
      if (socketConnection[name]) {
        socketConnection[name].disconnect()
      }
      const fullUrl = `${config.baseURL}${url}`

      if (classType) {
        socketConnection[name] = new SocketConnection(fullUrl).as(classType)
      } else {
        socketConnection[name] = new SocketConnection(fullUrl)
      }
      return socketConnection[name]
    }

    const disconnect = (name: string) => {
      if (socketConnection[name]) {
        socketConnection[name].disconnect()
        delete socketConnection[name]
      }
    }

    const getConnection = (name: string) => socketConnection[name] || null

    const disconnectAll = () => {
      for (const name in socketConnection) {
        disconnect(name)
      }
    }

    return {config, connect, disconnect, getConnection, disconnectAll}
  },
}

export default socket
