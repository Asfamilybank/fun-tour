import Desktop from 'components/Desktop'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <Desktop header={<NavBar />} footer={<Footer />}>
      <div className="bg-base-100">1</div>
    </Desktop>
  )
}

export default Home
