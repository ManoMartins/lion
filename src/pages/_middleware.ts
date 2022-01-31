import { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
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
