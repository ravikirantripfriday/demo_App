import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/reducer'

export const store = configureStore({
  reducer: {
    mainReducer: counterReducer,
  },
})