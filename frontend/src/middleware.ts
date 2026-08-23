import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    const isAuthPage = pathname.startsWith("/auth");

    if (!token && !isAuthPage) {
        const loginUrl = new URL("/auth", request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (token && isAuthPage) {
        const homeUrl = new URL("/", request.url);
        return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|logo.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
