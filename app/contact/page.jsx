"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {motion} from "framer-motion"

import { Select , SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import { Description } from "@radix-ui/react-dialog"

const info = [

  {
    icon : <FaPhoneAlt/>,
    title : "Phone",
    Description : "(+62) 8594-2831-910",
  },
  {
    icon : <FaEnvelope/>,
    title : "Email",
    Description : "abangazis2@gmail",
  },
  {
    icon : <FaMapMarkerAlt/>,
    title : "Madura, Indonesia",
    Description : "Sumenep, Jawa Timur",
  }
   
]
const page = () => {
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1,
      transition: {
        delay: 2.4 , duration:0.4, ease:"easeIn"
      }
    }}
    className="py-6"
    >

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className="xl:h-[54%] order-2 xl:order-none xl:max-w-[70%]">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">
                  Lets work together
                </h3>
                <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi repudiandae, corrupti dolorem, inventore perferendis delectus molestiae dolore deserunt incidunt quae voluptas neque vitae laboriosam laudantium cupiditate libero repellendus autem.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="FirstName"/>
                  <Input type="lastname" placeholder="LastName"/>
                  <Input type="email" placeholder="Email Address"/>
                  <Input type="phone" placeholder="Phone Number"/>
                </div>
                <Textarea
                className="h-[200px]"
                placeholder="Your Message"
                />
                   
                <Button size="md" className="max-w-40">
                Send message
                </Button>   
               
              </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-4 mb-4 last:mb-0">
                  <span className="text-accent">{item.icon}</span>
                  <div className="flex flex-col">
                    <h4 className="text-2xl font-semibold">{item.title}</h4>
                    <p className="text-white/60">{item.Description}</p>
                  </div>

                </li>
              )
            })} 

            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default page
