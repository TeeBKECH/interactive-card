import React from 'react'
import { useDispatch } from 'react-redux'

import { resetState } from '../store/slices/formSlice'

import confirmImg from '../assets/img/icon-complete.svg'

const Confirm = () => {
  const dispatch = useDispatch()
  return (
    <div className='confirm'>
      <img
        src={confirmImg}
        alt='confirm icon'
      />
      <h3>Thank You!</h3>
      <p>We've added your card details</p>
      <button
        onClick={() => dispatch(resetState())}
        type='submit'
      >
        Continue
      </button>
    </div>
  )
}

export default Confirm
