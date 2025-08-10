import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"
import { instrumentOutgoingRequests } from "@sentry/nextjs";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(request: NextResponse) {

    }, {
    instrumentOutgoingRequests: true,
}
)

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)',
    ],
}