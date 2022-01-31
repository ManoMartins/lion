import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { getAPIClient } from '../services/axios'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const api = getAPIClient(req)
  console.log('middleware', api.defaults.headers.common.Authorization)
  const { '@tfy:ath': token } = req.cookies
  const pathname = req.page.name?.slice(1)

  if (!!token) {
    console.log(token)
    return new Response('Oi middleware: ' + token)
  }
  // if (pathname && authenticatedPages.includes(pathname) && !token) {
  //   return NextResponse.redirect(`/login?redirectPath=${pathname}`)
  // }
}
