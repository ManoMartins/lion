import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { '@tfy:ath': token } = req.cookies
  const pathname = req.page.name?.slice(1)

  console.log(token)

  // if (pathname && authenticatedPages.includes(pathname) && !token) {
  //   return NextResponse.redirect(`/login?redirectPath=${pathname}`)
  // }
}