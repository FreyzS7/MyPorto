"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut",
          },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeInOut",
            },
          }}
          className="w-[280px] h-[280px] xl:w-[400px] xl:h-[400px] mix-blend-lighten relative z-10"
        >
          <Image src="/assets/photo.png" priority quality={100} alt="Abdul Azis" fill className="object-contain" />
        </motion.div>

        {/* Layered Ring Animation */}
        <div className="absolute flex items-center justify-center">
          {/* Outer Pulsing Ring */}
          <motion.div
            className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-blue-500"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
              delay: 2.5,
              scale: [1, 1.1, 1],
              opacity: [1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner Dynamic Rotating Dotted Ring */}
          <motion.svg
            className="absolute w-[300px] xl:w-[360px] h-[300px] xl:h-[360px]"
            viewBox="0 0 500 500"
          >
            <motion.circle
              cx="250"
              cy="250"
              r="240"
              stroke="#00aaff"
              strokeWidth="5"
              strokeDasharray="1 15"
              fill="none"
              initial={{ rotate: 0, scale: 1 ,opacity: 0, }}
              animate={{
                delay: 2.5,
                opacity: 1,
                rotate: [0, 90, 180, 270, 360],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
          {/* Center Glow Ring */}
          <motion.div
            className="absolute w-[250px] h-[250px] rounded-full bg-blue-500/10"
            initial={{ opacity: 0 }}
            animate={{
              delay: 2.5,
              opacity: 1,
              scale: [1, 1.15, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["50%", "50%", "50%", "50%", "45%"],
             
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
