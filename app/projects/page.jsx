"use client"

import {motion} from "framer-motion"
import React , {useState as UseState}  from "react"
import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderButtons from "@/components/main/WorkSliderButtons"


const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Web Movie App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    stack: [{
      name: "React",

    },
    {
      name: "JavaScript",

    },
    {
      name: "Axios",
    },
    {
      name: "tailwindcss",
    },
    {
      name: "vite",
    },
    {
      name: "vercel",
    }
  ],
  image: '/assets/work/thumb1.png',
  github: 'https://github.com/fsd-abdulazis-12001/Mission-FE',
  live: 'https://mission-fe.vercel.app',
  },
  {
    num: "02",
    category: "Backend",
    title: "REST API Movie App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    stack: [{
      name: "NodeJs",

    },
    {
      name: "Typescript",

    },
    {
      name: "Express",
    },
    {
      name: "PrismaDB",
    },
    {
      name: "NodeMailer",
    },
    {
      name: "vercel",
    }
  ],
  image: '/assets/work/thumb2.png',
  github: 'https://github.com/fsd-abdulazis-12001/mission-BE',
  live: 'https://mission-be.vercel.app',
  },
  {
    num: "03",
    category: "Frontend",
    title: "Todo List",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    stack: [{
      name: "React",

    },
    {
      name: "Tailwind",

    },
    {
      name: "Vite",
    },
    {
      name: "Javascript",
    }
  ],
  image: '/assets/work/thumb3.png',
  github: 'https://github.com/fsd-abdulazis-12001/PR-TodoList',
  live: 'https://pr-todo-list.vercel.app/TodoUstate',
  },
  {
    num: "04",
    category: "Frontend",
    title: "Fecth Pokemon List",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    stack: [{
      name: "React",

    },
    {
      name: "Tailwind",

    },
    {
      name: "Vite",
    },
    {
      name: "Javascript",
    },
    {
      name: "Axios",
    }
  ],
  image: '/assets/work/thumb4.png',
  github: 'https://github.com/fsd-abdulazis-12001/PR-TodoList',
  live: 'https://pr-todo-list.vercel.app/pokemon',
  },
  {
    num: "05",
    category: "Frontend",
    title: "Web Course",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    stack: [{
      name: "css",

    },
    {
      name: "html",

    },
    {
      name: "Javascript",
    }
  ],
  image: '/assets/work/thumb5.png',
  github: 'https://github.com/fsd-abdulazis-12001/mission3',
  live: 'https://fsd-abdulazis-12001.github.io/mission3/beranda',
  },
  {
    num: "06",
    category: "Frontend",
    title: "Advance Todo List",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    stack: [{
      name: "css",

    },
    {
      name: "html",

    },
    {
      name: "Javascript",
    }
  ],
  image: '/assets/work/thumb6.png',
  github: 'https://github.com/fsd-abdulazis-12001/mission4',
  live: 'https://fsd-abdulazis-12001.github.io/mission4/',
  }
]

const page = () => {
  const [project, setProject] = UseState(projects[0])

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex])
  }
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1,
      transition: {
        delay: 2.4 , duration:0.4, ease:"easeIn"
      }
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:ml-11">

            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}

              </div>
              {/* Project Name */}

              <h1 className="text-[42px] font-bold leading-none text-accent group-hover:text-white transition-all duration-500 capitalize">{project.title} project</h1>
              {/* category */}

              <h2 className="text-[22px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>

                {/* description */}

                <p className="text-white/60 group-hover:text-accent transition-all duration-500">
                {project.description}
                </p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return <li key={index} className="text-xl text-accent">{item.name}
                    {index !== project.stack.length - 1 && ","}
                    </li>
                  })}
                    
                </ul>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} rel="noopener noreferrer" target="_blank">
                  <TooltipProvider delayDuration={100}>
                     <Tooltip>
                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                         <BsArrowUpRight className="text-white text-3xl  group-hover:text-accent transition-all duration-500"/>

                       </TooltipTrigger>
                       <TooltipContent>
                         <p>View Live</p>
                       </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
                </Link>
                  {/* github project button */}
                  <Link href={project.github} rel="noopener noreferrer" target="_blank">
                  <TooltipProvider delayDuration={100}>
                     <Tooltip>
                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                         <BsGithub className="text-white text-3xl  group-hover:text-accent transition-all duration-500"/>

                       </TooltipTrigger>
                       <TooltipContent>
                         <p>Github Repository</p>
                       </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>

          </div>
          <div className="w-full xl:w-[50%]"> 
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} 
                className="w-ful"
                
                >
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">


                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                  </div>
                  <div className="relative w-full h-full">
                    <Image src={project.image} 
                    fill
                    alt="project image" 
                    className="w-full h-full object-cover"/>
                  </div>
                  </div>

                </SwiperSlide>
                
                })}
                <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 xl:bottom-0 w-full justify-between xl:justify-center xl:gap-8 xl:px-0"

                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300"
                />
            </Swiper>
          </div>
        </div>

      </div>
   
    </motion.section>
  )
}

export default page
