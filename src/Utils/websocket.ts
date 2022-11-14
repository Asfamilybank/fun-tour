import React from 'react'
import ReconnectingWebSocket from 'reconnecting-websocket'
import { WebSocketEventListenerMap } from 'reconnecting-websocket/dist/events'

export type IWebSocketDataFlag = 'ACTIVE' | 'HISTORY' | 'FORWARD' | 'SYSTEM' | 'ACK'
export interface IWebSocketData {
  flag?: IWebSocketDataFlag
  sender?: {
    userId?: string
  }
  receiver?: {
    userId?: string
  }
  message: string
}

export interface IUseWebSocketOptions extends Partial<WebSocketEventListenerMap> {}

export const useReconnectingWebSocket = (options?: IUseWebSocketOptions) => {
  const rws = React.useRef<ReconnectingWebSocket | null>(null)

  const init = React.useCallback(() => {
    if (!rws.current) {
      const socket = new ReconnectingWebSocket(import.meta.env.VITE_WEB_SOCKET)

      options &&
        Object.entries<IUseWebSocketOptions[keyof IUseWebSocketOptions]>(options).forEach(([type, listener]) => {
          listener && socket.addEventListener(type as keyof IUseWebSocketOptions, listener)
        })

      rws.current = socket
    }
    console.log('connect')
  }, [options])

  React.useLayoutEffect(() => {
    init()

    return () => {
      rws.current?.close()
    }
  }, [init])

  const send = (data: IWebSocketData) => {
    console.log(data)
    if (rws) {
      rws.current?.send(JSON.stringify(data))
    }
  }

  return { rws, send }
}
