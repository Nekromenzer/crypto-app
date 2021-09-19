import { configureStore } from '@reduxjs/toolkit'
import { CryptoApi } from '../services/CryptoApi'
import { CryptoNewsApi } from '../services/CryptoNews'

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer
  }
})
