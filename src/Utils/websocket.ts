import { useCallback, useEffect } from 'react'
import ReconnectingWebSocket from 'reconnecting-websocket'

export const rws: ReconnectingWebSocket = new ReconnectingWebSocket('ws://czytgc.com:8771/websocket')

export const useReconnectingWebSocket = () => {
  return { rws }
}
