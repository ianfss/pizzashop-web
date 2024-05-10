import { http, HttpResponse } from 'msw'

import type { DispatchOrderParams } from '../dispatch-order'

export const dispatchOrderMock = http.patch<DispatchOrderParams>(
  '/orders/:orderId/dispatch',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
