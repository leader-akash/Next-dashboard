'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Automatically collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // Hide sidebar by default on small screens
      } else {
        setIsSidebarOpen(true); // Show sidebar by default on larger screens
      }
    };

    handleResize(); // Set initial state based on current screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header  toggleSidebar={toggleSidebar} />
          <div className="flex flex-1">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex flex-1 flex-col">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
