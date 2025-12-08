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
  const stats = [
    { icon: Smile, number: 232, label: "Happy Clients" },
    { icon: FileText, number: 521, label: "Projects" },
    { icon: Headphones, number: 1463, label: "Hours Of Support" },
    { icon: Users, number: 15, label: "Hard Workers" },
  ];

  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "31 March 2001" },
    { icon: Globe, label: "Website", value: "www.example.com" },
    { icon: Phone, label: "Phone", value: "+989383044158" },
    { icon: MapPin, label: "City", value: "saqqez city , Kordestan, IRAN" },
    { icon: GraduationCap, label: "Degree", value: "Pursuing a Bacgelor's degree in IT engineering" },
    { icon: Mail, label: "Email", value: "maysamghaysari80@gmail.com" },
    { icon: Briefcase, label: "Freelance", value: "Available" },
  ];

  return (
    <div className="relative z-20 w-full bg-[#0b1120] py-12 overflow-hidden max-sm:mt-[-50]  ">
      <div className="min-h-screen py-16 px-4 max-sm:mt-[-100] max-w-[1280px] m-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">About</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Intro Text */}
        <p className="text-center text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
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
             Front-End & Web Developer.
            </h2>
            <p className="text-gray-400 italic mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

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

            <p className="text-gray-400 leading-relaxed">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
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
