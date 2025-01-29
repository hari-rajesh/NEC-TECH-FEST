"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar.jsx";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Event",
      link: "/event",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <motion.div 
      className="fixed top-0 w-[95vw] z-50 flex justify-center mx-auto left-0 right-0 font-monoton"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div
        whileHover={{
          width: "600px",
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="w-auto"
      >
        <FloatingNav
          navItems={navItems}
          className="bg-purple-900/30 backdrop-blur-md shadow-[0_0_20px_rgba(88,28,135,0.7)] border-purple-600/50 text-white font-monoton"
        />
      </motion.div>
    </motion.div>
  );
}
