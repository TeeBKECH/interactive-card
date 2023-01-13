import React from 'react'
import BackCard from './BackCard'
import FrontCard from './FrontCard'
import { useMediaQuery } from 'react-responsive'

import bgDesktopImg from '../assets/img/bg-main-desktop.png'
import bgMobileImg from '../assets/img/bg-main-mobile.png'

const Cards = () => {
  const isDesctop = useMediaQuery({
    query: '(min-width: 1400px)',
  })
  console.log(isDesctop)
  return (
    <div className='cards'>
      <div className='cards_bg'>
        <img
          src={isDesctop ? bgDesktopImg : bgMobileImg}
          alt=''
        />
      </div>
      <div className='cards_items'>
        <FrontCard />
        <BackCard />
      </div>
    </div>
  )
}

export default Cards
