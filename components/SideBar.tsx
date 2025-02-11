"use client"
import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react'
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { usePathname } from 'next/navigation'

const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: Layers2Icon
  },
  {
    href: "/credentials",
    label: "Credentials",
    icon: ShieldCheckIcon
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon
  }
]

const DesktopSidebar = () => {
  const pathname = usePathname()

  // Find the route that exactly matches the pathname or falls back to the home route.
  const activeRoute = routes.find(route => route.href !== "/" && pathname.includes(route.href)) || routes[0]

  const [Open, setOpen] = useState(false)

  return (
    <div className="hidden relative md:block max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2">
      <div className="flex items-center justify-center gap-2 border-b border-separate p-4">
        <Logo />
      </div>

      <div className="p-2">TOTO CREDITS</div>

      <div className="flex flex-col p-2">
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant: activeRoute.href === route.href ? "sidebarActiveItem" : "sidebarItem"
            })}
         onClick={() => setOpen((prev)=> !prev)}
         
         >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DesktopSidebar




import {  MenuIcon,  } from 'lucide-react'


import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'



export function MobileSidebar() {
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false)

  const activeRoute = routes.find(route => route.href !== "/" && pathname.includes(route.href)) || routes[0]

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open navigation menu">
              <MenuIcon />
            </button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] space-y-4" side="left">
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map(route => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant: activeRoute.href === route.href ? "sidebarActiveItem" : "sidebarItem"
                  })}
                  onClick={() => setOpen(false)}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}
