import React, { ReactNode } from 'react'
import { Separator } from "@/components/ui/separator"
import DesktopSidebar from '@/components/SideBar'
import { ModeToggle } from '@/components/theme/mode-toggle'
import BreadcrumHeader from '@/components/BreadcrumHeader'
import { SignedIn, UserButton } from '@clerk/nextjs'

const layout = ({children}: {children : ReactNode}) => {
  return (
   <div className="flex h-screen ">
    <DesktopSidebar/>
    <div className="flex flex-col flex-1 min-h-screen">
        <header className='flex items-center justify-between px-6 py-5 h-[50px]
        container'>
            <BreadcrumHeader />
            <div className="gap-2 flex items-center">
            <ModeToggle/>
            <SignedIn>
                <UserButton/>
            </SignedIn>
            </div>
           
        </header>
        <Separator />
        <div className="overflow-auto">
            <div className="flex-1 container py-4 text-accent-foreground">
                {children}
            </div>
        </div>

    </div>
   </div>
  )
}

export default layout