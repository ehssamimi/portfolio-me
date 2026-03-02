import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import RoadmapPage from "@/components/RoadmapPage";
import SkillsSection from "@/components/Skills";
import WhatIDo from "@/components/What";
export const metadata = {
  title:
    "احسان صمیمی راد  | توسعه‌دهنده فرانت‌اند | Next.js & React | Ehsan Samimi Rad",
  description:
    "احسان صمیمی راد  - برنامه‌نویس وب با تمرکز روی Next.js، React، Tailwind ، TypeScript   . مشاهده پروژه‌ها، رزومه و راه‌های ارتباط.",
  openGraph: {
    title: "احسان صمیمی راد  - پورتفولیو - Ehsan Samimi Rad",
    description: "...",
    url: "https://maysamghaysari.ir",
    siteName: "احسان صمیمی راد  | Ehsan Samimi Rad",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "احسان صمیمی راد ",
  alternateName: "Ehsan Samimi Rad",
  jobTitle: "توسعه‌دهنده فرانت‌اند | Frontend Developer",
  url: "https://maysamghaysari.ir",
  sameAs: [
    "https://www.linkedin.com/in/maysam-ghaysari-227676367",
    "https://github.com/Maysam-Ghaysari",
    "https://www.instagram.com/maysam_qaysari?igsh=bjFtNW5nM3d3YXls",
  ],
  email: "maysamghaysari80@gmail.com",
  birthDate: "2001-03-31",
  address: {
    "@type": "PostalAddress",
    addressLocality: "سقز",
    addressRegion: "کردستان",
    addressCountry: "IR",
  },
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroAbout />
      <WhatIDo />
      <RoadmapPage />
      <ProjectsSection />
      <SkillsSection />
      <About />
      <ContactMe />
      <Footer />
    </>
  );
}
