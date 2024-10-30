 import { Button } from '@/components/ui/button'
 import { FiDownload } from 'react-icons/fi'
import React from 'react'
import Socials from '@/components/main/Socials'
import Photo from '@/components/main/Photo'
import Stats from '@/components/main/Stats'
 
 const page = () => {
   return (
     <section className='h-full'>
       <div className='container mx-auto'>
         <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            {/* text */}
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br/><span className='text-accent'>Abdul Azis  </span>
            </h1>
            <p className='mb-8'>I excel in web development and I am proficient in various proggramming languages and tecnhnologies</p>
          <div className='flex flex-col xl:flex-row items-center gap-8'>
                 {/* btn and social */}
          {/* <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl"/>
          </Button> */}
          <div className='mb-8 xl:mb-0'>
            <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
          </div>
          </div>
          </div>

     
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
           <Photo/>
          </div>
         </div>
       
       </div>
       <Stats/>
     </section>
   )
 }
 
 export default page
 