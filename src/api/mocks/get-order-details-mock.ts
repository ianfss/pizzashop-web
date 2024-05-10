import { http, HttpResponse } from 'msw'

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+55 (12) 98765-4321',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza 1' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza 2' },
        quantity: 1,
      },
    ],
    totalInCents: 40000,
  })
})
