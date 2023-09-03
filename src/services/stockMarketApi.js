import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoChartHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'a2fa4486bfmsh89eba6629c2e989p1ffc5ejsn41d8a3131f7f',
    'X-RapidAPI-Host': 'candlestick-chart.p.rapidapi.com'
}

const baseUrl = 'https://candlestick-chart.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoChartHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoChartHeaders',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;