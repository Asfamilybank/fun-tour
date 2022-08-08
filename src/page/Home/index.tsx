import { useState } from 'react'
import KeepAlive from 'react-activation'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Desktop from 'components/Desktop'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <Desktop header={<NavBar />} footer={<Footer />}>
      <div className="">1</div>
    </Desktop>
  )
}

export default Home
