import React from 'react'
import { useSelector } from 'react-redux'

import cardBg from '../assets/img/bg-card-back.png'

const BackCard = () => {
  const { card_cvc } = useSelector((store) => store.form.data)
  return (
    <div className='card card-back'>
      <div className='card_bg'>
        <img
          src={cardBg}
          alt=''
        />
      </div>
      <div className='card_info'>
        <div className='card_info-cvc'>{card_cvc}</div>
      </div>
    </div>
  )
}

export default BackCard
