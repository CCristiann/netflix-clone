import { auth } from "@/server/auth"

export default auth((req) => {
  if(req.auth && req.nextUrl.pathname == "/") {
    const newUrl = new URL("/browse", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
  if (!req.auth && req.nextUrl.pathname == "/browse") {
    const newUrl = new URL("/sign-in", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}