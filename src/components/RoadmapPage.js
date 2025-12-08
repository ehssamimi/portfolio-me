"use client";
import { useState, useEffect } from "react";

export default function RoadmapTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);

  const roadmapItems = [
    {
      date: "January 2023",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "March 2023",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "May 2023",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "July 2024",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "September 2024",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "November 2024",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "November 2025",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "November 2025",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
    {
      date: "November 2025",
      description: "Diam dolor ipsum sit amet erat ipsum lorem sit",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(3);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, roadmapItems.length - visibleItems);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="relative z-20 w-full bg-[#0b1120] py-12 overflow-hidden max-sm:mt-[-50] font-[raleway]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-gray-100 mb-3 md:mb-4">
            Roadmap
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 px-4">
            We Translate Your Dream Into Reality
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative overflow-hidden py-3 px-2 sm:px-4 md:px-6">
          {/* Horizontal Line */}
          <div className="absolute top-[20px] sm:top-[25px] md:top-[30px] left-0 right-0 h-[2px] bg-gray-300 border-t-2 border-dashed border-gray-400"></div>

          {/* Sliding Container */}
          <div
            className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-full max-sm:w-[calc(33.333%-1rem)] max-lg:w-[calc(33.333%-1rem)] lg:w-[calc(20%-3rem)]"
              >
                {/* Diamond Container */}
                <div className="relative mb-8 sm:mb-12 md:mb-16">
                  {/* Outer Diamond */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border-2 sm:border-3 md:border-4 border-cyan-400 transform rotate-45 flex items-center justify-center relative z-10">
                    {/* Inner Diamond */}
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-cyan-400"></div>
                  </div>

                  {/* Vertical Line */}
                  <div className="absolute top-8 sm:top-10 md:top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 sm:h-16 md:h-20 border-l-2 border-dashed border-gray-400"></div>

                  {/* Small Bottom Diamond */}
                  <div className="absolute top-[80px] sm:top-[104px] md:top-[120px] left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-cyan-400 transform rotate-45"></div>
                </div>

                {/* Content */}
                <div className="text-center mt-2 sm:mt-3 md:mt-4 max-sm:py-6 py-4 px-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-300 mb-1 sm:mb-2 whitespace-nowrap">
                    {item.date}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-12 sm:mt-14 md:mt-16">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 transition-all shadow-lg hover:scale-110 active:scale-95"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 transition-all shadow-lg hover:scale-110 active:scale-95"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-7 md:mt-8 flex-wrap px-4">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-cyan-400 w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-cyan-300 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
