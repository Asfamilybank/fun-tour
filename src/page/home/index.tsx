import CommonApi from 'api/common'
import { useSetRecoilState } from 'recoil'
import { countState } from 'store/atoms'

const Home = () => {
  const setCount = useSetRecoilState(countState)

  const onBtnClick = async () => {
    setCount((v) => v + 1)
    const res = await CommonApi.login({ name: '1', password: '2' })
    console.log(res)
  }

  return (
    <>
      <button className="block border" onClick={onBtnClick}>
        +
      </button>
    </>
  )
}

export default Home
