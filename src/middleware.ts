import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest) {
        console.log(request)
    }, {
    isReturnToCurrentPage: true,
}
)

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/ (API routes)
         * - _next/ (static files, image optimization files, etc.)
         * - auth/ (Kinde auth routes)
         * - images/ (static images)
         * - login (login page)
         * ...or ending with (files):
         * - .ico (favicon)
         * - .txt (robots.txt)
         * ...or the root path itself ($)
         */
        '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)',
    ]
}