 
"use client"

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "./ui/sheet"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"

import Link from "next/link"
const MobileNav = () => {
    const pathname = usePathname()
    const links = [
        { name: "home", href: "/" },
        { name: "services", href: "/services" },
        { name: "resume", href: "/resume" },
        { name: "projects", href: "/projects" },
        { name: "contact", href: "/contact" }
    ]
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
        <SheetContent className="flex flex-col">
        <SheetTitle></SheetTitle> 
           {/* Logo */}
            <div className="mt-32 mb-40 text-center text=2xl">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Azis<span className="text-accent">.</span>
                </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={`${link.href === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hocer:text-accent hover:border-b-2 hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>

    </Sheet>
  )
}

export default MobileNav
