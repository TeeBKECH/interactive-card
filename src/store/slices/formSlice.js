import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    cardholder_name: 'Jane Appleseed',
    card_number: '1234123412341234',
    card_mounth: '07',
    card_year: '22',
    card_cvc: '000',
  },
  confirm: false,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeField: (state, action) => {
      console.log(action.payload)
      state.data = {
        ...state.data,
        [action.payload.name]: action.payload.value,
      }
    },
    setForm: (state, action) => {
      state.data = action.payload
      state.confirm = true
    },
    resetState: (state) => {
      state.data = initialState.data
      state.confirm = false
    },
  },
})

export const { setForm, changeField, resetState } = formSlice.actions

export const formReducer = formSlice.reducer
