// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
 
// import { NextResponse } from "next/server";
// // import { routeAccessMap } from "./lib/procatedRoutes";


// type RouteAccessMap = {
//     [key: string]: string[];
//   };
  
//   export const routeAccessMap: RouteAccessMap = {
//     "/admin(.*)": ["admin"],
//     "/emp(.*)": ["emp"], 
//   };

// const matchers = Object.keys(routeAccessMap).map((route) => ({
//   matcher: createRouteMatcher([route]),
//   allowedRoles: routeAccessMap[route],
// }));
 

// export default clerkMiddleware( async (auth, req) => { 

//   const { sessionClaims } =await auth();

// //   const role = (sessionClaims?.metadata as { role?: string })?.role;
// const role = (sessionClaims?.metadata as { role?: string })?.role;

//   for (const { matcher, allowedRoles } of matchers) {
//     if (matcher(req) && !allowedRoles.includes(role!)) {
//       return NextResponse.redirect(new URL(`/${role}`, req.url));
//     }
//   }
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }; 


import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}