import { api } from '@/lib/axios'

interface GetProfileResponse {
  phone: string | null
  email: string
  name: string
  id: string
  role: 'manager' | 'customer'
  createdAt: Date
  updatedAt: Date
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
