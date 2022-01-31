import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { '@tfy:ath': token } = req.cookies
  const pathname = req.page.name?.slice(1)

  if (pathname === 'log' && !token) {
    const url = req.nextUrl
    url.pathname = '/'
    url.searchParams.set('redirectPath', pathname)
    return NextResponse.redirect(url)
  }
}
