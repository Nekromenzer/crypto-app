import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'a9d3011a5dmsh20902063431fdbbp17fc11jsn845f285cb552'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = url => ({
  url,
  headers: cryptoApiHeaders
})

export const CryptoApi = createApi({
  reducerPath: 'CryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`)
    })
  })
})

export const { useGetCryptosQuery } = CryptoApi
