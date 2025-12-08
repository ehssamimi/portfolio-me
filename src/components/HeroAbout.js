"use client";
import { Github } from "lucide-react";
import { Download, Mail, ArrowDown } from "lucide-react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function HeroAbout() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Github,
      href: "https://github.com/Maysam-Ghaysari",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/maysam_ghaysarii?igsh=MXZhemY3dXJkeDdjbQ==",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/maysam-ghaysari-227676367",
      label: "LinkedIn",
    },
  ];
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume/MyResume.pdf";
    link.download = "My-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative h-screen w-full">
      {/* --- تغییر اصلی اینجا ---
        1. absolute تبدیل شد به fixed
        2. z-0 اضافه شد تا زیر متن‌ها باشد
        3. pointer-events-none اضافه شد تا عکس مانع کلیک روی دکمه‌ها نشود
      */}
      <div className="fixed right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-30 z-0 pointer-events-none">
        <img
          src="/Me/1000009466.jpg"
          alt="عکس پس زمینه"
          className="h-full w-full object-cover object-left"
          style={{ boxShadow: "-18px 0 130px rgba(220,220,220,0.9)" }}
        />
      </div>

      {/* دایره‌های بلور شده (تزئینی) */}
      {/* برای اینکه این‌ها هم فیکس بمانند، می‌توانید به آن‌ها هم fixed بدهید، یا اگر می‌خواهید اسکرول شوند absolute بمانند */}
      <div className="fixed max-sm:hidden -top-12 -left-32 w-166 h-126 bg-blue-900 rounded-full blur-[120px] -z-10" />

      {/* --- کانتینر محتوا ---
        باید relative و z-index بالاتر داشته باشد تا روی عکس دیده شود
      */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center min-md:ml-40">
          {/* Greeting */}
          <div className="mb-16 animate-fadeIn"></div>

          {/* Main Heading */}
          <h1 className="text-4xl max-sm:text-5xl md:text-6xl lg:text-8xl text-white mb-4 leading-tight animate-fadeIn">
            <span className="bg-white bg-clip-text text-transparent font-[Caveat]">
              Maysam Ghaysari
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-light mb-6 animate-fadeIn font-[raleway]">
            Frontend Developer
          </p>

          {/* Social Media */}
          <div className="flex gap-4 justify-center">
            {/* کدهای Social Links شما */}
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-cyan-500 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-22 mt-22 animate-fadeIn">
            <button
              type="button"
              onClick={downloadResume}
              className="group w-full sm:w-auto flex items-center font-[raleway] justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/20 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold text-lg"
            >
              <Download size={22} className="group-hover:animate-bounce " />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="group w-full font-[raleway] sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-500 font-semibold text-lg"
            >
              <Mail
                size={22}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce mt-10">
            <ArrowDown className="mx-auto text-white/60" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
