import {
  Calendar,
  Globe,
  Phone,
  MapPin,
  GraduationCap,
  Mail,
  Briefcase,
  Smile,
  FileText,
  Headphones,
  Users,
} from "lucide-react";

export default function AboutSection() {
  // const stats = [
  //   { icon: Smile, number: 232, label: "Happy Clients" },
  //   { icon: FileText, number: 521, label: "Projects" },
  //   { icon: Headphones, number: 1463, label: "Hours Of Support" },
  //   { icon: Users, number: 15, label: "Hard Workers" },
  // ];

  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "31 March 2001" },
    { icon: Globe, label: "Website", value: "-" },
    { icon: Phone, label: "Phone", value: "+989383044158" },
    { icon: MapPin, label: "City", value: "saqqez city , Kordestan, IRAN" },
    { icon: GraduationCap, label: "Degree", value: "Pursuing a Bacgelor's degree in IT engineering" },
    { icon: Mail, label: "Email", value: "maysamghaysari80@gmail.com" },
    { icon: Briefcase, label: "Freelance", value: "Available" },
  ];

  return (
    <div className="relative z-20 w-full bg-[#0b1120] py-12 overflow-hidden max-sm:mt-[-50] font-[raleway]  ">
      <div className="min-h-screen py-16 px-4 max-sm:mt-[-100] max-w-[1280px] m-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl  text-gray-100 mb-4">About</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Intro Text */}
        <p className="text-center text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
       I am highly interested in front-end development. I enjoy creating engaging and user-friendly interfaces and focusing on the overall user experience (UX). I am passionate about turning design concepts into interactive web applications using modern technologies.
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-1">
          {/* Profile Image */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-md">
              <img
                src="/Me/1000024341.jpg"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
             Front-End & Web Developer
            </h2>
         

            {/* Personal Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-gray-300">
                        {item.label}:
                      </span>
                      <span className="text-gray-500 ml-2">{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-400 leading-relaxed" >
         I view front-end development as a craft where technical logic meets visual artistry. I thrive on the challenge of bridging the gap between design concepts and high-performance, accessible user experiences. What truly drives me is tackling complex UI/UX problems and ensuring a fluid experience in large-scale applications, all while constantly pursuing cleaner code architecture and staying on the cutting edge of modern standards. Beyond the technology stack, I seek to collaborate with organizations that prioritize integrity, ethical innovation, and a tangible commitment to positive social impact.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0b1120] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-100 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
