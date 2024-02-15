/*
export { default } from "next-auth/middleware"
export const config = { matcher: ["/admin/:path*", "/user"] }
*/

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const session = await getToken({req, secret: 'secret'});
    const pathname = req.nextUrl.pathname;

    console.log('[middleware] session', session);

    if ( req.nextUrl.pathname.startsWith("/user") && !session ) 
    {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    if ( req.nextUrl.pathname.startsWith("/admin") && (session?.role !== "Admin")) 
    {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if ( pathname.startsWith("/auth") && session ) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();

}

export const config = {
    matcher:
    [
        "/admin/:path*",
        "/auth/:path*",
        "/user/:path*"        
    ]
}