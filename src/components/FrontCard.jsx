import React from 'react'
import { useSelector } from 'react-redux'

import cardBg from '../assets/img/bg-card-front.png'
import cardLogo from '../assets/img/card-logo.svg'

const FrontCard = () => {
  const { cardholder_name, card_number, card_mounth, card_year } = useSelector(
    (store) => store.form.data,
  )

  let formatedNum = card_number
    .split('')
    .map((el, i) => {
      if ((i + 1) % 4 === 0) {
        return `${el} `
      }
      return el
    })
    .join('')

  return (
    <div className='card card-front'>
      <div className='card_bg'>
        <img
          src={cardBg}
          alt='card backgound'
        />
      </div>
      <div className='card_info'>
        <div className='card_info-logo'>
          <img
            src={cardLogo}
            alt='card logo'
          />
        </div>
        <div className='card_info-number'>{formatedNum}</div>
        <div className='card_info-customer'>
          <div className='card_info-name'>{cardholder_name}</div>
          <div className='card_info-year'>
            {card_mounth}/{card_year}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontCard
