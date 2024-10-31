"use client";

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import React from 'react';
import Socials from '@/components/main/Socials';
import Photo from '@/components/main/Photo';
import Stats from '@/components/main/Stats';

const page = () => {
  return (
    <section className="h-full bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Hero Text */}
            <span className="text-accent text-lg mb-2 block">Software Developer</span>
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Hello, I&apos;m <br />
              <span className="text-accent">Abdul Azis</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-md">
              I excel in web development and am proficient in various programming languages and technologies.
            </p>
            {/* Socials and Download Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-gray-900 transition-all duration-500"
                />
              </div>
              <Button variant="primary">
                <FiDownload className="mr-2" /> Download Resume
              </Button>
            </div>
          </div>
          {/* Photo Component */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        {/* Stats Component */}
        <Stats />
      </div>
    </section>
  );
};

export default page;
