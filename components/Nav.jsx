"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"



const Nav = () => {

    const pathname = usePathname()
    const links = [
        { name: "home", href: "/" },
        { name: "services", href: "/services" },
        { name: "resume", href: "/resume" },
        { name: "projects", href: "/projects" },
        { name: "contact", href: "/contact" }
    ]
    
  return (
     
    <nav className="flex gap-8">
      {links.map((link, index) => {
       return (
        <Link href={link.href} key={index} 
        className={`${link.href === pathname && "text-accent border-b-2 border-accent"}}`}>
           {link.name}
        </Link>
       );
     })}
    </nav>
  )
}

export default Nav
