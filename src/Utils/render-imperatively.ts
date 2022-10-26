import {
  cloneElement,
  createElement,
  createRef,
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { renderToBody } from './render-to-body'
type ImperativeProps = {
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}
type WrapperHandler = {
  close: () => void
}
export const renderImperatively = (
  element: ReactElement<ImperativeProps>,
  parent?: HTMLElement
) => {
  const WrapperRender: ForwardRefRenderFunction<WrapperHandler> = (_, ref) => {
    const [visible, setVisible] = useState<boolean | undefined>(undefined)
    const closedRef = useRef(false)
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true)
      } else {
        afterClose()
      }
    }, [])
    function onClose() {
      closedRef.current = true
      setVisible(false)
      element.props.onClose?.()
    }
    function afterClose() {
      unmount()
      element.props.afterClose?.()
    }
    useImperativeHandle(ref, () => ({
      close: onClose
    }))
    return cloneElement(element, {
      ...element.props,
      visible,
      onClose,
      afterClose
    })
  }
  const Wrapper = forwardRef<WrapperHandler>(WrapperRender)
  const wrapperRef = createRef<WrapperHandler>()
  const unmount = renderToBody(
    createElement(Wrapper, { ref: wrapperRef }),
    parent
  )
  function close() {
    wrapperRef.current?.close()
  }
  return { close }
}
