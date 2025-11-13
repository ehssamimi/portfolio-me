"use client";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "ZarinPal Website",
      description:
        "A simple e-commerce website inspired by Zarinpal, built using only HTML and CSS. It was one of my first projects and is part of my portfolio to showcase early work and growth in web development",
      image: "/projects/zarinpal.png",
      tags: ["HTML", "CSS.module", " Responsive Design"],
      // github: "#",
      demo: "https://gleeful-ganache-ec0db5.netlify.app",
    },
    {
      id: 2,
      title: " Delta.app",
      description:
        "I recreated the landing page of Delta.app using Next.js and Tailwind CSS to practice building pixel-perfect, responsive interfaces. The goal of this project was to replicate the modern and clean design of the original site while focusing on component structure, layout optimization, and responsive design",
      image: "/projects/homepage.png",
      tags: ["NEXT.JS", "Tailwind css", " Responsive Design"],
      // github: "#",
      demo: "https://tourmaline-bunny-6ae6e6.netlify.app",
    },
    {
      id: 3,
      title: "Book Store Demo App",
      description:
        "A responsive Book Store web app built with React and CSS. It includes a separate search page, detailed product pages with comments, user authentication (login & signup), favorites, cart system, and advanced filtering options.This is a demo version, so some features are not fully functional yet.",
      image: "/projects/book.png",
      tags: ["React.js", "Axios", "Fake Api", "Css Module"],
      // github: "#",
      demo: "https://steady-treacle-0fd54a.netlify.app",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] m-auto ">
      <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/6 backdrop-blur-sm rounded-3xl overflow-hidden border-white/10 border-1 transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Hover Overlay with Icons - MODIFIED: Hidden on mobile (sm) */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  {/* <a
                    href={project.github}
                    className="p-3 bg-white/90 rounded-full hover:bg-white transform hover:scale-110 transition-all duration-200 shadow-lg"
                    aria-label="View GitHub"
                    onClick={(e) => e.stopPropagation()} // Prevent click-through
                  >
                    <Github className="text-gray-900" size={20} />
                  </a> */}
                  <a
                    target="_blank"
                    href={project.demo}
                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg"
                    aria-label="View Demo"
                    onClick={(e) => e.stopPropagation()} // Prevent click-through
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- NEW: Mobile-only Links --- */}
                {/* Visible on sm, hidden on md and up */}
                <div className="flex md:hidden items-center gap-3 mt-5">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border-white/10 border-1 text-gray-300 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
                {/* --- End of Mobile-only Links --- */}
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="text-center">
          <Link
            href="/allproject"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border-white/10 border-1 text-gray-300 rounded-3xl hover:bg-white/20 transform hover:scale-105 transition-all duration-500"
          >
            <span>View All Projects</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={22}
            />
          </Link>
        </div> */}

        {/* Decorative Background Elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
