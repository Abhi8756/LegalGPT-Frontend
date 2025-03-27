"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Left section - Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <Image 
              src="/logo.png" 
              alt="LegalGPT Logo" 
              width={50} 
              height={50} 
              className="h-12 w-15"
            />
            <span className="text-2xl font-bold text-primary tracking-tight">LegalGPT</span>
          </Link>
        </div>
        
        {/* Center section - Navigation */}
        <div className="flex-grow flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 md:gap-2">
              {/* Get Started Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm md:text-base font-medium">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                    <ListItem href="/contract-generation" title="Generate Contract">
                      Create legal contracts with AI assistance
                    </ListItem>
                    <ListItem href="/riskdetection" title="Risk Detection">
                      Identify potential legal risks in your documents
                    </ListItem>
                    <ListItem href="/contract-analyzer" title="Analyze Contract">
                      Get detailed analysis of your existing contracts
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Pricing Link */}
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm md:text-base font-medium")}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right section - Contact */}
        <div className="flex items-center">
          <Link 
            href="/contact" 
            className="rounded-md bg-primary hover:bg-primary/90 transition-colors px-4 py-2 text-sm md:text-base font-medium text-primary-foreground shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  href: string
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-semibold leading-tight">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export default Navbar
