"use client";
import { motion } from "framer-motion";
import { PiCode } from "react-icons/pi";
import { MdNetworkCheck } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import React from "react";
export const metadata = {
  title:
    "میثم قیصری | توسعه‌دهنده فرانت‌اند | Next.js & React | maysam ghaysari",
  description:
    "میثم قیصری - برنامه‌نویس وب با تمرکز روی Next.js، React، Tailwind ، TypeScript   . مشاهده پروژه‌ها، رزومه و راه‌های ارتباط.",
  openGraph: {
    title: "میثم قیصری - پورتفولیو - maysam ghaysari",
    description: "...",
    url: "https://maysamghaysari.ir",
    siteName: "میثم قیصری | maysam ghaysari",
    type: "website",
  },
};

const WhatIDo = () => {
  const services = [
    {
      icon: <PiCode className="size-8 mr-1" />,
      title: "Clean & Organized Code",
      description:
        "I write clean, well-documented, and scalable code following best practices for long-term maintainability.",
    },
    {
      icon: <MdNetworkCheck className="size-8 mr-2" />,
      title: "1 Year of Experience", // اصلاح گرامری: Years -> Year
      description:
        "Three years of solid experience in frontend development and UI design using modern frameworks.",
    },
    {
      icon: <GrProjects className="size-7 mr-2" />,
      title: "Real-World Projects",
      description:
        "Hands-on experience building real products with performance, accessibility, and design in mind.",
    },
  ];

  return (
    <section className="relative z-20 w-full bg-[#0b1120] py-12 overflow-hidden max-sm:mt-[-90] font-[raleway]">
      {/* کانتینر محدود کننده عرض (Max Width) را اینجا می‌گذاریم */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* هدر بخش */}
        <div className="text-center mb-16">
          <h2 className="text-4xl  text-white">What I Do</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            I create smooth, aesthetic, and high-performance web experiences
            using modern frontend technologies.
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group p-6 text-gray-200 transition-all duration-500
      bg-white/4 backdrop-blur-lg
      border border-white/10
      rounded-[4%_25%_4%_25%]
      hover:shadow-lg hover:bg-white/10"
              initial={{ opacity: 0, y: 50 }} // شروع انیمیشن
              animate={{ opacity: 1, y: 0 }} // پایان انیمیشن
              transition={{ duration: 0.9, delay: index * 0.4 }} // زمان و تاخیر
            >
              <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-[15%_90%_30%_30%] bg-indigo-100/30 border border-white/30 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
