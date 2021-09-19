import { configureStore } from '@reduxjs/toolkit'
import { CryptoApi } from '../services/CryptoApi'

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer 
  }
})
