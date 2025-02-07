"use client"

import { FC, ReactNode, useEffect, useState } from "react"
import {ClerkProvider,useAuth,SignInButton} from "@clerk/clerk-react"
import {ConvexProviderWithClerk} from "convex/react-clerk"
import {Authenticated,Unauthenticated,ConvexReactClient} from "convex/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaSignalMessenger } from "react-icons/fa6"


const CONVEX_URL=process.env.NEXT_PUBLIC_CONVEX_URL!;
const CLERK_PUBLISHABLE_KEY=process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!
const convex=new ConvexReactClient(CONVEX_URL)

const ConvexClientProvider:FC<{children:ReactNode}>=({children})=>{
    const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering on server-side
    return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <ConvexProviderWithClerk 
        client={convex}
        useAuth={useAuth}
        >
            <Authenticated>
               {children} 
            </Authenticated>
            <Unauthenticated >
            <ConvexProviderWithClerk
            
        client={convex}
        useAuth={useAuth}>
          <div className='bg-slate-900 w-svw h-dvh grid place-content-center'>
            <Card className="w-full max-w-sm sm:max-w-md mx-auto mt-8 p-4 sm:p-6 shadow-lg rounded-xl">
  <CardHeader className="flex flex-col items-center text-center">
    <br />
    <br />
    <br /><br /><br /><br />
    <CardTitle className="text-2xl font-semibold">Nextgram</CardTitle>
    <div className='grid place-content-center mb-5'>
              <FaSignalMessenger size={100} className='text-blue-900' />
            </div>
    <CardDescription>Authenticate</CardDescription>
  </CardHeader>

  {/* Centered Content */}
  <CardContent className="flex justify-center">
    <SignInButton mode="modal">
      <Button className="w-25">Sign in</Button>
    </SignInButton>
  </CardContent>

  <CardFooter className=" text-sm/6 flex flex-col items-center">
    <p className="text-sm/6 size-6 text-gray-500">Created by Shokh</p>
  </CardFooter>
</Card>
</div>
            </ConvexProviderWithClerk>

            </Unauthenticated>
        </ConvexProviderWithClerk>
    </ClerkProvider>
    )
}
export default ConvexClientProvider