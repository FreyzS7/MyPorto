"use client"

import {
FaHtml5,
FaCss3,
FaJs,
FaReact,
FaNode,
FaGithub,
FaFigma,

} from "react-icons/fa"

import {
  SiTailwindcss,
  SiNextdotjs,
  SiLua
  } from "react-icons/si"



 const about = {

   tittle: 'about me',
   description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
   info: [
    {fieldName: 'Name', value: 'Abdul Azis'},
    {fieldName: 'Phone', value: '(+62) 8594-2831-910'},
    {fieldName: 'Discord', value: 'FreyzS_'},
    {fieldName: 'Email', value: 'AbangAzis2@gmail.com'},
    {fieldName: 'Nationality', value: 'Indonesian'},
    {fieldName: 'Fiver', value: '@freyzs'},
    {fieldName: 'Language', value: 'Bahasa Indonesia, English'},
   ]
  } 


  const experience = {
    icon: '/assets/resume/badge.svg',
    tittle: 'My Experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    items: [
      {
        company: 'Fiverr',
        position: 'Web Developer, Game Developer',
        period: '2021 - Present',
      },
       {
        company: 'Youtube',
        position: 'Content Creator',
        period: '2020 - 2022',
      },
    ]
  }

  const education = {
    icon: '/assets/resume/cap.svg',
    tittle: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    items: [
      {
        company: 'HariSenin.com',
        position: 'Bootcampt Full-Stack Web Developer',
        period: '1/04/2024 - 1/11/2024',
      },
      {
        company: 'Codecademy',
        position: 'Front-end Track',
        period: '2024',
      },
      {
        company: 'Udemy',
        position: 'Full-Stack Web Developer ',
        period: '2024',
      }
    ]
  }

  const skills= {
    tittle: 'My Skills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    items: [
      {
        name: 'HTML5',
        icon: <FaHtml5/>
      },
      {
        name: 'CSS3',
        icon: <FaCss3/>
      },
      {
        name: 'Lua',
        icon: <SiLua/>
      },
      {
        name: 'Tailwind',
        icon: <SiTailwindcss/>
      },
      {
        name: 'JavaScript',
        icon: <FaJs/>
      },
      {
        name: 'ReactJS',
        icon: <FaReact/>
      },
      {
        name: 'NextJS',
        icon: <SiNextdotjs/>
      },
      {
        name: 'NodeJs',
        icon: <FaNode/>
      },
      {
        name: 'Github',
        icon: <FaGithub/>
      },
      {
        name: 'Figma',
        icon: <FaFigma/>
      }
    ]
  }

  import { Tabs, TabsContent, TabsList, TabsTrigger } from'@/components/ui/tabs'
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
  import { ScrollArea } from "@/components/ui/scroll-area"
  import {motion} from "framer-motion"
import { X } from "lucide-react"
  const page = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,
      transition: {
        duration: 0.4,
        delay: 2.4,
        ease: "easeIn",
      }
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value ="experience">Experience </TabsTrigger>
            <TabsTrigger value ="education">Education </TabsTrigger>
            <TabsTrigger value ="skills">Skills </TabsTrigger>
            <TabsTrigger value ="about">About me </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
             {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {experience.tittle}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto">
                {experience.description}
              </p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {
                    experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                          <span className="text-accent">
                            {item.period}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                            <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">

                            </span>

                            <p className="text-white/60">
                              {item.company}
                            </p>
                            </div>
                        </li>
                      );
                  })}
                </ul>


              </ScrollArea>
              </div>
               
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {education.tittle}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto">
                {education.description}
              </p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {
                    education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                          <span className="text-accent">
                            {item.period}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                            <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">

                            </span>

                            <p className="text-white/60">
                              {item.company}
                            </p>
                            </div>
                        </li>
                      );
                  })}
                </ul>


              </ScrollArea>
              </div>
               
            </TabsContent>
            {/* skills */}     
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
                <div >
                <h3 className="text-4xl font-bold">
                  {education.tittle}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                          <p>
                          {item.name}
                          </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                    
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}   
            <TabsContent value="about" className="w-full text-center xl:text-left">
             <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">
                  {about.tittle}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}

              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"> 
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                     <span className="text-white/60">
                     {item.fieldName}
                     </span>
                     <span className="text-xl">
                     {item.value}
                     </span>
                    </li>
                  )
                })}
              </ul>
             </div>
             
              About
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default page
