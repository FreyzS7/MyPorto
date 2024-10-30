"use client";

import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building scalable, fast, and modern websites tailored to your needs.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Creating user-centered designs that enhance user experience.",
    href: "/services/ui-ux-design",
  },
  {
    num: "03",
    title: "Roblox Game Development",
    description: "Developing immersive experiences for the Roblox platform.",
    href: "/services/roblox-game-development",
  },
  {
    num: "04",
    title: "Logo Design",
    description: "Crafting memorable and meaningful logos that define your brand.",
    href: "/services/logo-design",
  },
];

const Page = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 xl:py-0 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 xl:gap-16"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center items-start p-6 rounded-lg bg-gray-800/90 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 group"
            >
              <div className="w-full flex justify-between items-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-blue-600 transition-all duration-500 flex justify-center items-center">
                  <FiArrowRightCircle className="text-gray-800 group-hover:text-white text-3xl transition-transform transform group-hover:rotate-45 duration-300" />
                </Link>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-2 group-hover:text-teal-300 transition-colors duration-500">
                {service.title}
              </h2>
              <p className="text-white/70 mb-4">{service.description}</p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
