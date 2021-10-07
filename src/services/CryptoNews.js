import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'a9d3011a5dmsh20902063431fdbbp17fc11jsn845f285cb552'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = url => ({
  url,
  headers: cryptoNewsHeaders
})

export const CryptoNewsApi = createApi({
  reducerPath: 'CryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        )
    })
  })
})

export const { useGetCryptoNewsQuery } = CryptoNewsApi