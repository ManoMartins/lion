import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { '@tfy:ath': token } = req.cookies
  const pathname = req.page.name?.slice(1)

  if (pathname === 'log' && !token) {
    console.log(token)
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.rewrite(url)
  }
  // if (pathname && authenticatedPages.includes(pathname) && !token) {
  //   return NextResponse.redirect(`/login?redirectPath=${pathname}`)
  // }
}
