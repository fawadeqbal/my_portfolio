import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fawad Iqbal | Software Engineer: React, Node.js, Java, Hardware Integration",
  description: "Explore the diverse skill set of a proficient software engineering student adept in React, Next.js, Node.js, and Java for web and desktop applications. Specializing in MySQL database management and seamless integration of hardware components like ESP and Raspberry Pi with software applications. Discover innovative solutions and projects showcasing expertise in frontend and backend development, hardware integration, and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='Light'>
        
        <Header/>
        {children}
        <Footer/>

        </ThemeProvider>
        </body>
    </html>
  );
}
