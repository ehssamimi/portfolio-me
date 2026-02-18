"use client";
import { useState } from "react"; // 1. اضافه کردن استیت
import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // برای انیمیشن نرم موقع باز شدن
import Image from "next/image"; // طبق صحبت قبلی از Image استفاده کن

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false); // استیت برای نمایش همه

  const projects = [
    {
      id: 7,

      title: "Coffe-Store",

      description:
        "Full-Stack Professional E-Commerce Platform A high-performance system built with Next.js and MongoDB, featuring professional Auth, advanced Filtering/Search, and a dynamic Shopping Cart. It includes dedicated Admin/User panels, SEO-friendly Blogs, and a Ticket system, all wrapped in a fully responsive, Mobile-First design.",

      image: "/projects/Coffee.webp",

      tags: ["Next.js ", "Authentication", "MongoDB"],

      demo: "https://coffe-shop-six-beta.vercel.app",
    },

    {
      id: 5,

      title: "a-world",

      description:
        "**A-World** is an engaging platform for travel and camping enthusiasts, offering adventurous experiences, travel tips, and exciting routes in a fully responsive design. Users can easily enjoy travel and camping content on any device.",

      image: "/projects/a-world.webp",

      tags: ["JavaScript ", "Css", "Html", "Responsive"],

      demo: "https://a-world-rho.vercel.app",
    },

    {
      id: 6,

      title: "Wealzi",

      description:
        "At Wealzi, we have taken a new step in providing investment and portfolio management services by creating a secure platform for digital asset investment. We consider it our mission to guide all stages of investment with intelligence and simplicity, enhancing investment capabilities for people from all walks of life.",

      image: "/projects/wealzi.webp",

      tags: ["Next.js ", "Tailwind", "Responsive"],

      demo: "https://tredfi-wealzi.vercel.app",
    },

    {
      id: 2,

      title: " Delta.app",

      description:
        "I recreated the landing page of Delta.app using Next.js and Tailwind CSS to practice building pixel-perfect, responsive interfaces. The goal of this project was to replicate the modern and clean design of the original site while focusing on component structure, layout optimization, and responsive design",

      image: "/projects/homepage.webp",

      tags: ["NEXT.JS", "Tailwind css", " Responsive Design"],

      demo: "https://tourmaline-bunny-6ae6e6.netlify.app",
    },

    {
      id: 3,

      title: "Book Store Demo App",

      description:
        "A responsive Book Store web app built with React and CSS. It includes a separate search page, detailed product pages with comments, user authentication (login & signup), favorites, cart system, and advanced filtering options.This is a demo version, so some features are not fully functional yet.",

      image: "/projects/book.webp",

      tags: ["React.js", "Axios", "Fake Api", "Css Module"],

      demo: "https://steady-treacle-0fd54a.netlify.app",
    },

    {
      id: 4,

      title: "Madic care",

      description:
        "Medical Care is a simple and fully responsive healthcare website. It delivers essential medical information with a clean layout and smooth usability across mobile, tablet, and desktop.",

      image: "/projects/Madic-Care.webp",

      tags: ["JavaScript ", "Css", "Html", "Responsive"],

      demo: "https://medic-care-alpha.vercel.app",
    },

    {
      id: 1,

      title: "ZarinPal Website",

      description:
        "A simple e-commerce website inspired by Zarinpal, built using only HTML and CSS. It was one of my first projects and is part of my portfolio to showcase early work and growth in web development",

      image: "/projects/zarinpal.webp",

      tags: ["HTML", "CSS.module", " Responsive Design"],

      demo: "https://gleeful-ganache-ec0db5.netlify.app",
    },
  ];
  // پروژه‌هایی که باید نمایش داده شوند
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="relative z-20 w-full bg-[#0b1120] py-12 overflow-hidden max-sm:mt-[-50] font-[raleway]">
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] m-auto z-20 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing modern web development
            practices and creative problem-solving
          </p>
        </div>

        {/* گرید پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* تصویر */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                {/* محتوا + دکمه */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* تگ‌ها */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* دکمه اصلی */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#0b1120] hover:bg-[#192741] text-blue-300 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
                  >
                    View Demo
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* دکمه Show More / Show Less */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-95 "
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp
                  size={20}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </>
            ) : (
              <>
                View More Projects
                <ChevronDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </>
            )}
          </button>
        </div>

        {/* پس‌زمینه نوری */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
