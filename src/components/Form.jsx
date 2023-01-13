import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import { setForm, changeField } from '../store/slices/formSlice'
import Confirm from './Confirm'

const Form = () => {
  const dispatch = useDispatch()
  const { data, confirm } = useSelector((store) => store.form)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(data)

  const onSubmit = (data) => {
    dispatch(setForm(data))
  }

  const onChangeValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    dispatch(
      changeField({
        name,
        value,
      }),
    )
  }

  return (
    <div className='form_wrapper'>
      {confirm ? (
        <Confirm />
      ) : (
        <form
          className='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form_top'>
            <div className='form_control'>
              <p className='form_label'>Cardholder Name</p>
              <input
                {...register('cardholder_name', {
                  required: true,
                  maxLength: 30,
                  pattern: /^[A-Za-z\s]+$/i,
                  onChange: (e) => onChangeValue(e),
                })}
                maxLength='30'
                className={`form_input ${errors?.cardholder_name ? 'form_input_error' : ''}`}
                placeholder='e.g. Jane Appleseed'
              />

              {errors?.cardholder_name?.type === 'required' && <p>This field is required</p>}
              {errors?.cardholder_name?.type === 'maxLength' && (
                <p>First name cannot exceed 20 characters</p>
              )}
              {errors?.cardholder_name?.type === 'pattern' && <p>Alphabetical characters only</p>}
            </div>

            <div className='form_control'>
              <p className='form_label'>Card Number</p>
              <input
                {...register('card_number', {
                  required: true,
                  maxLength: 16,
                  pattern: /^[0-9]+$/i,
                  onChange: (e) => onChangeValue(e),
                })}
                maxLength='16'
                className={`form_input ${errors?.card_number ? 'form_input_error' : ''}`}
                placeholder='e.g. 1234 4323 5674 2361'
              />

              {errors?.card_number?.type === 'required' && <p>This field is required</p>}
              {errors?.card_number?.type === 'maxLength' && <p>exceed 16 characters</p>}
              {errors?.card_number?.type === 'pattern' && <p>Number characters only</p>}
            </div>
          </div>

          <div className='form_bottom'>
            <div className='form_control'>
              <p className='form_label'>Exp. Date (MM/YY)</p>
              <div className='form_date'>
                <input
                  {...register('card_mounth', {
                    required: true,
                    maxLength: 2,
                    pattern: /^[0-9]+$/i,
                    onChange: (e) => onChangeValue(e),
                  })}
                  maxLength='2'
                  className={`form_input ${errors?.card_mounth ? 'form_input_error' : ''}`}
                  placeholder='MM'
                />
                <input
                  {...register('card_year', {
                    required: true,
                    maxLength: 2,
                    pattern: /^[0-9]+$/i,
                    onChange: (e) => onChangeValue(e),
                  })}
                  maxLength='2'
                  className={`form_input ${errors?.card_year ? 'form_input_error' : ''}`}
                  placeholder='YY'
                />
              </div>
              {(errors?.card_mounth?.type || errors?.card_year?.type) && <p>Required</p>}
            </div>
            <div className='form_control'>
              <p className='form_label'>CVC</p>
              <input
                {...register('card_cvc', {
                  required: true,
                  maxLength: 3,
                  pattern: /^[0-9]+$/i,
                  onChange: (e) => onChangeValue(e),
                })}
                maxLength='3'
                className={`form_input ${errors?.card_cvc ? 'form_input_error' : ''}`}
                placeholder='e.g. 123'
              />
              {errors?.card_cvc?.type === 'required' && <p>This field is required</p>}
              {errors?.card_cvc?.type === 'maxLength' && <p>exceed 3 characters</p>}
              {errors?.card_cvc?.type === 'pattern' && <p>Number characters only</p>}
            </div>
          </div>
          <button type='submit'>Confirm</button>
        </form>
      )}
    </div>
  )
}

export default Form
