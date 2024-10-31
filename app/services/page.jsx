"use client";

import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building scalable, fast, and modern websites tailored to your needs.",
    href: "/services",
  },
  {
    num: "02",
    title: "3d Animation",
    description: "Creating 3d animations that bring your ideas to life.",
    href: "/services",
  },
  {
    num: "03",
    title: "Roblox Game Development",
    description: "Developing immersive experiences for the Roblox platform.",
    href: "/services",
  },
  {
    num: "04",
    title: "Logo Design",
    description: "Crafting memorable and meaningful logos that define your brand.",
    href: "/services",
  },
];

const Page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-start items-center py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, delay:2, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 xl:gap-16"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center items-start p-6 rounded-lg bg-gray-800/90 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 group"
            >
              <div className="w-full flex justify-between items-center mb-4">
                
                <div className="text-4xl font-bold text-transparent text-outline mb-4">
                {service.num}
              </div>
                <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-blue-600 transition-all duration-500 flex justify-center items-center">
                  <FiArrowRightCircle className="text-gray-800 group-hover:text-white text-3xl transition-transform transform group-hover:rotate-45 duration-300" />
                </Link>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-2">
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
