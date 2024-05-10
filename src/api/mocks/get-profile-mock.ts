import { http, HttpResponse } from 'msw'

import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+55 (12) 98765-4321',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  },
)
