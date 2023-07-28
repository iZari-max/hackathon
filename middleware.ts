import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/", 
  "/products", 
  "/accessories", 
  "/inputDevices", 
  "/outputDevices",
  "/processors",
  "/storageDevices"
]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};