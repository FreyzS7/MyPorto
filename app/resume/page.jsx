"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiLua } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a passionate developer with a keen interest in web and game development. I specialize in modern technologies to build impactful solutions.",
  info: [
    { fieldName: "Name", value: "Abdul Azis" },
    { fieldName: "Phone", value: "(+62) 8594-2831-910" },
    { fieldName: "Discord", value: "FreyzS_" },
    { fieldName: "Email", value: "AbangAzis2@gmail.com" },
    { fieldName: "Nationality", value: "Indonesian" },
    { fieldName: "Fiverr", value: "@freyzs" },
    { fieldName: "Languages", value: "Bahasa Indonesia, English" },
  ],
};

const experience = {
  title: "My Experience",
  items: [
    {
      company: "Fiverr",
      position: "Web Developer, Game Developer",
      period: "2021 - Present",
    },
    {
      company: "YouTube",
      position: "Content Creator",
      period: "2020 - 2022",
    },
  ],
};

const education = {
  title: "My Education",
  items: [
    {
      company: "HariSenin.com",
      position: "Bootcamp - Full-Stack Web Developer",
      period: "April 2024 - Nov 2024",
    },
    {
      company: "Codecademy",
      position: "Front-end Track",
      period: "2024",
    },
    {
      company: "Udemy",
      position: "Full-Stack Web Developer",
      period: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  items: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Lua", icon: <SiLua /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "NodeJS", icon: <FaNode /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-6">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8">
          <TabsList className="flex flex-col w-full max-w-[280px] mx-auto xl:mx-0 gap-4">
            {["experience", "education", "skills", "about"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-lg font-semibold text-white hover:text-accent transition-colors duration-300 p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px] p-2 rounded-lg">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-800 p-6 rounded-xl flex flex-col gap-2 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <span className="text-sm text-gray-400">{item.period}</span>
                        <h4 className="text-lg font-semibold">{item.position}</h4>
                        <span className="text-sm text-gray-400">{item.company}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px] p-2 rounded-lg">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-800 p-6 rounded-xl flex flex-col gap-2 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <span className="text-sm text-gray-400">{item.period}</span>
                        <h4 className="text-lg font-semibold">{item.position}</h4>
                        <span className="text-sm text-gray-400">{item.company}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-center xl:text-left">{skills.title}</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="bg-gray-800 w-full h-24 rounded-xl flex justify-center items-center group shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl group-hover:text-accent transition-colors duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm font-medium">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="text-white/80">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-lg mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-gray-400">{item.fieldName}</span>
                      <span className="text-lg font-medium">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Page;
