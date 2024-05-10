import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'
export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', revenue: 800 },
    { date: '02/01/2024', revenue: 400 },
    { date: '03/01/2024', revenue: 200 },
    { date: '04/01/2024', revenue: 1600 },
    { date: '05/01/2024', revenue: 2000 },
    { date: '06/01/2024', revenue: 100 },
    { date: '07/01/2024', revenue: 500 },
    { date: '08/01/2024', revenue: 555 },
    { date: '09/01/2024', revenue: 640 },
    { date: '10/01/2024', revenue: 777 },
    { date: '11/01/2024', revenue: 643 },
  ])
})
