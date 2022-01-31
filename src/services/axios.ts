import axios from 'axios'
import { NextApiRequest, NextPageContext } from 'next'
import { parseCookies } from 'nookies'

export function getAPIClient(
  ctx?:
    | Pick<NextPageContext, 'req'>
    | {
        req: NextApiRequest
      }
) {
  const { '@tfy:ath': ath } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

  if (ath) {
    const { token } = JSON.parse(Buffer.from(ath, 'base64').toString())
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  return api
}
