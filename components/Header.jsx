 import Link from "next/link"
 import { Button


  } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

//components


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Azis<span className="text-accent">.</span>
            </h1>
        </Link>
        
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
         <Nav/>

         {/* <Link href="/contact">
            <Button className="ml-4">Hire me</Button>
         </Link> */}
      
        </div>

        {/* mobile nav */}
        <div className="xl:hidden gap-4">
         <MobileNav/>
        </div>
    </div>
    </header>
  )
}

export default Header
