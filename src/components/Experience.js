"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Experience = () => {
  const experiences =
  [
    {
      company: "Aksoftware",
      role: "Front-End / Full-Stack Developer",
      period: "June 2024 — February 2026",
      description: [
        "Designed and architected 10+ custom web platforms with dedicated admin panels and fully customizable theming systems (Moonhub, Orderion, Catering, MeetMeHalfway).",
        "Optimized frontend validation logic and UX flows, reducing form submission errors by 40% and improving interaction reliability.",
        "Led frontend redesign initiatives that improved UX score by 15% and increased conversion rate by 7%.",
        "Built scalable architectures focused on long-term maintainability and client-specific customization."
      ],
    },
    {
      company: "ArcadianAI",
      role: "Senior Front-End Developer",
      period: "April 2023 — May 2024",
      description: [
        "Led frontend development for enterprise platforms with live streaming, recording, and role-based access control.",
        "Integrated AI-powered chat and intelligent comment analysis using ChatGPT Tokens, increasing customer satisfaction by ~40%.",
        "Executed a major UI and performance overhaul, reducing average page load time significantly.",
        "Improved application stability by reducing frontend-related errors by 30% through SDK creation and E2E/unit testing."
      ],
    },
    {
      company: "Tikka",
      role: "Senior Front-End Developer (Freelance)",
      period: "July 2022 — February 2023",
      description: [
        "Directed a mobile-first redesign of a large-scale language learning platform serving 100,000+ active users.",
        "Implemented advanced A/B testing and W3C-compliant SEO strategies.",
        "Achieved first-page Google rankings for critical keywords.",
        "Drove 30% organic user growth within 5 months."
      ],
    },
    {
      company: "Kelidiha",
      role: "Front-End Developer / Team Lead (Freelance)",
      period: "February 2019 — July 2022",
      description: [
        "Built a comprehensive online academy ecosystem with video learning, WebRTC live streaming, group sessions, chat, exams, and advanced test management.",
        "Delivered multi-role platforms including website, landing pages, applications, and 5 management panels.",
        "Led and mentored 4 developers, improving team collaboration and delivery alignment.",
        "Reduced data-fetch latency by 53% using GraphQL and Apollo Client optimization."
      ],
    },
    {
      company: "Jaan",
      role: "Front-End Developer / Team Lead (Freelance)",
      period: "February 2020 — July 2022",
      description: [
        "Spearheaded development of a meditation and wellness platform serving 100K+ users.",
        "Delivered PWA, Android, and iOS releases with full redesign and feature expansion.",
        "Implemented real-time streaming and interactive breathing experiences.",
        "Mentored 3 developers and improved user retention through performance optimizations."
      ],
    },
    {
      company: "Hamdmade Ltd.",
      role: "Front-End Developer",
      period: "March 2018 — January 2022",
      description: [
        "Developed multiple PWA applications and admin panels using Vue and React.",
        "Built real-time booking systems (e.g., tennis court reservation platform).",
        "Focused on performance, responsiveness, and clean Material Design UI."
      ],
    },
    // {
    //   company: "MyJobAI",
    //   role: "Full-Stack Engineer",
    //   period: "2023 — 2024",
    //   description: [
    //     "Architected an AI-driven job matching pipeline, reducing sign-up to first application time from 10 minutes to under 2 minutes.",
    //     "Built scalable platform using Next.js, Prisma, Postgres, and Supabase.",
    //     "Implemented multi-user coach workflows with 90% UAT success rate.",
    //     "Used Grafana and Hotjar analytics to optimize UX and performance."
    //   ],
    // },
    // {
    //   company: "LearningPilot",
    //   role: "Full-Stack Engineer",
    //   period: "2023 — 2024",
    //   description: [
    //     "Engineered AI-powered platform to generate digital courses from PDF and PowerPoint files.",
    //     "Designed SCORM-like modular workflow architecture.",
    //     "Achieved 20% user growth within two months.",
    //     "Built high-performance frontend with Next.js."
    //   ],
    // },
    // {
    //   company: "Ash Logistics Platform",
    //   role: "Front-End Engineer",
    //   period: "2022 — 2023",
    //   description: [
    //     "Designed real-time cargo tracking solution with messaging and financial confirmation workflows.",
    //     "Ensured low latency and operational reliability across web, admin, and WeChat Mini Program.",
    //     "Built cross-platform logistics system with scalable architecture."
    //   ],
    // },
  ];




  //  [
  //   {
  //     company: "Upstatement",
  //     role: "Lead Engineer",
  //     period: "May 2018 — Present",
  //     description: [
  //       "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
  //       "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
  //       "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
  //       "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
  //     ],
  //   },
  //   {
  //     company: "Apple",
  //     role: "Software Engineer",
  //     period: "Jan 2017 — May 2018",
  //     description: [
  //       "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
  //       "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
  //       "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
  //       "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
  //     ],
  //   },
  //   {
  //     company: "Scout Studio",
  //     role: "Frontend Developer",
  //     period: "Jun 2016 — Dec 2016",
  //     description: [
  //       "Collaborated with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
  //       "Helped solidify a brand direction for blistabloc that spans both packaging and web",
  //       "Interfaced with clients on a weekly basis, providing technological expertise",
  //     ],
  //   },
  //   {
  //     company: "Starry",
  //     role: "Software Engineer Co-op",
  //     period: "Jul 2015 — Dec 2015",
  //     description: [
  //       "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
  //       "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router",
  //       "Collaborated with designers, engineers, and product managers to create user-friendly and engaging features",
  //     ],
  //   },
  //   {
  //     company: "MullenLowe",
  //     role: "Creative Technologist Co-op",
  //     period: "Jul 2014 — Dec 2014",
  //     description: [
  //       "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
  //       "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
  //       "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
  //     ],
  //   },
  // ];

  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const [mobileIndicatorStyle, setMobileIndicatorStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef([]);

  useEffect(() => {
    if (buttonRefs.current[activeTab]) {
      const button = buttonRefs.current[activeTab];
      const offsetTop = button.offsetTop;
      const height = button.offsetHeight;
      const offsetLeft = button.offsetLeft;
      const width = button.offsetWidth;
      
      setIndicatorStyle({
        top: offsetTop,
        height: height,
      });
      
      setMobileIndicatorStyle({
        left: offsetLeft,
        width: width,
      });
    }
  }, [activeTab]);

  return (
    <section className="relative z-20 w-full bg-[#0b1120] py-20 overflow-hidden font-[raleway]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-white mb-4">Where I've Worked</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and experience across different companies
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with company names */}
          <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 relative scrollbar-hide">
            {/* Animated border indicator for desktop (left border) */}
            <motion.div
              className="hidden lg:block absolute left-0 w-1 bg-cyan-400 rounded-r z-20"
              initial={false}
              animate={{
                top: indicatorStyle.top,
                height: indicatorStyle.height,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            
            {/* Animated underline indicator for mobile (bottom border) */}
            <motion.div
              className="lg:hidden absolute bottom-0 h-0.5 bg-cyan-400 z-20"
              initial={false}
              animate={{
                left: mobileIndicatorStyle.left,
                width: mobileIndicatorStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            
            {experiences.map((exp, index) => (
              <button
                key={index}
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => setActiveTab(index)}
                className={`
                  px-6 py-3 text-sm font-mono whitespace-nowrap 
                  lg:text-left lg:whitespace-normal text-center
                  lg:border-l-4 border-transparent transition-all duration-300 relative
                  ${
                    activeTab === index
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-cyan-400"
                  }
                `}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content area */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:w-3/4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 lg:p-8"
          >
            <h3 className="text-2xl lg:text-3xl text-white mb-2">
              {experiences[activeTab].role}{" "}
              <span className="text-cyan-400">
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-mono">
              {experiences[activeTab].period}
            </p>

            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex gap-3 text-gray-300 leading-relaxed"
                >
                  <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
