import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  //   console.log("proxy is modify middleware ok! proxy is executed!");
  console.log(
    " Next.js 16, Middleware is now called Proxy to better reflect its purpose",
  );
  //   return NextResponse.redirect(new URL('/home', request.url))

  //Acsses token from cookies
  const authToken = request.cookies.get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }
  // console.log(authToken);
  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
  if (loggedInUserNotAccessPaths) {
    //accessing not secured route
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    //accessing secured route
    if (!authToken) {
         if(request.nextUrl.pathname.startsWith("/api")){
          return NextResponse.json({
            message:"Access Denied!!",
            success:false
          },{status:401})
         }

      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ],
};
