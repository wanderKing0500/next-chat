import { ChatsLayout } from "@/components/chats-layout";
import React, { FC, ReactNode } from "react";
type LayoutProps={
    children:ReactNode
}
const Layout:FC<LayoutProps>=({children})=>{
    return(
    <><div className='hidden md:flex md:ml-24 md:px-0 h-dvh'>
            <ChatsLayout>
                {children}
            </ChatsLayout>
        </div><div className='md:hidden my-20 md:px-2'>
                {children}
            </div></>
    )
};
export default Layout;