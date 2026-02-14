import { Caveat, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "raleway",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "Caveat",
  subsets: ["latin"],
});

export const metadata = {
  title: "maysam ghaysari",
  description: "Front-End Developer فرانت اند دولوپر - برنامه نویس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${caveat.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
