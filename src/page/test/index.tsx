import { useRecoilValue } from 'recoil'
import { countState } from 'store/atoms'

const Test = () => {
  const count = useRecoilValue(countState)

  return <>{count}</>
}

export default Test
