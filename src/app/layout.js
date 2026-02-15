import { Caveat, Raleway } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const raleway = Raleway({
  variable: "raleway",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "Caveat",
  subsets: ["latin"],
});

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
    images: [<Image src="/Me/1000009466.jpg" alt="My Image" fill />],
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "میثم قیصری",
    alternateName: "Maysam Ghaysari",
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
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${caveat.variable}  antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
