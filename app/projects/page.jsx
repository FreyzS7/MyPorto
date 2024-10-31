"use client";

import { motion } from "framer-motion";
import React, { useState as UseState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/main/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Web Movie App",
    description: "A responsive web app for browsing movies, powered by an external API to fetch data on popular, trending, and upcoming movies.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Axios" },
      { name: "tailwindcss" },
      { name: "vite" },
      { name: "vercel" }
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/fsd-abdulazis-12001/Mission-FE",
    live: "https://mission-fe.vercel.app",
  },
  {
    num: "02",
    category: "Backend",
    title: "REST API Movie App",
    description: "A backend REST API for a movie app, built with Node.js and TypeScript. Supports various endpoints for movie data, authentication, and email notifications.",
    stack: [
      { name: "NodeJs" },
      { name: "Typescript" },
      { name: "Express" },
      { name: "PrismaDB" },
      { name: "NodeMailer" },
      { name: "vercel" }
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/fsd-abdulazis-12001/mission-BE",
    live: "https://mission-be.vercel.app",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Todo List",
    description: "A simple, user-friendly Todo List app allowing users to add, edit, and delete tasks with a minimalistic interface.",
    stack: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "Vite" },
      { name: "Javascript" }
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/fsd-abdulazis-12001/PR-TodoList",
    live: "https://pr-todo-list.vercel.app/TodoUstate",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Fetch Pokemon List",
    description: "A web app to fetch and display a list of Pokemon. Features search functionality and card views for individual Pokemon details.",
    stack: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "Vite" },
      { name: "Javascript" },
      { name: "Axios" }
    ],
    image: "/assets/work/thumb4.png",
    github: "https://github.com/fsd-abdulazis-12001/PR-TodoList",
    live: "https://pr-todo-list.vercel.app/pokemon",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Web Course",
    description: "A landing page for an online course, showcasing curriculum details and an interactive design with animations and responsive layout.",
    stack: [
      { name: "CSS" },
      { name: "HTML" },
      { name: "Javascript" }
    ],
    image: "/assets/work/thumb5.png",
    github: "https://github.com/fsd-abdulazis-12001/mission3",
    live: "https://fsd-abdulazis-12001.github.io/mission3/beranda",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Advanced Todo List",
    description: "An advanced version of a Todo List app featuring categorized tasks, due dates, and a cleaner UI with enhanced interactions.",
    stack: [
      { name: "CSS" },
      { name: "HTML" },
      { name: "Javascript" }
    ],
    image: "/assets/work/thumb6.png",
    github: "https://github.com/fsd-abdulazis-12001/mission4",
    live: "https://fsd-abdulazis-12001.github.io/mission4/",
  }
];


const Page = () => {
  const [project, setProject] = UseState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:ml-11 gap-8">
            <div className="text-8xl font-extrabold text-transparent text-outline mb-4">
              {project.num}
            </div>
            <h1 className="text-4xl font-bold text-accent capitalize transition-colors duration-500">
              {project.title} project
            </h1>
            <h2 className="text-2xl font-semibold text-white capitalize">
              {project.category}
            </h2>
            <p className="text-white/70 mb-4">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-3 mb-8">
              {project.stack.map((item, index) => (
                <li
                  key={index}
                  className="text-lg text-accent"
                >
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              {/* Live Project Button */}
              <Link href={project.live} rel="noopener noreferrer" target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300">
                      <BsArrowUpRight className="text-white text-2xl group-hover:text-primary" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Live</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/* GitHub Project Button */}
              <Link href={project.github} rel="noopener noreferrer" target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300">
                      <BsGithub className="text-white text-2xl group-hover:text-primary" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-gray-800 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image
                      src={project.image}
                      fill
                      alt="project image"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 xl:bottom-0 w-full justify-between xl:justify-center xl:gap-8"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 rounded-full shadow-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
