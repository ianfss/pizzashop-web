import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'
export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 12 },
    { product: 'Pizza 2', amount: 8 },
    { product: 'Pizza 3', amount: 9 },
    { product: 'Pizza 4', amount: 4 },
    { product: 'Pizza 5', amount: 1 },
  ])
})
