"use client";
import React, { useState, useRef } from "react";
import { FloatingNav } from "./floating-navbar.jsx";
import { 
  IconHome, 
  IconBuilding, 
  IconDeviceGamepad2, 
  IconBulb, 
  IconBook2, 
  IconBed 
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [showDepartments, setShowDepartments] = useState(false);
  const associationsRef = useRef(null);

  const departments = [
    "Computer Science",
    "Electrical",
    "Information Technology",
    "Electronics",
    "Mechanical",
    "Civil",
    "AI&DS",
  ];


  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Associations",
      link: "#",
      icon: <IconBuilding className="h-4 w-4 text-white" />,
      hasDropdown: true,
      dropdownItems: departments,
      onMouseEnter: () => setShowDepartments(true),
      onMouseLeave: () => setShowDepartments(false),
      ref: associationsRef,
    },
    {
      name: "Non-Tech",
      link: "/events/non-tech",
      icon: <IconDeviceGamepad2 className="h-4 w-4 text-white" />,
    },
    {
      name: "Ideathon",
      link: "/ideathon",
      icon: <IconBulb className="h-4 w-4 text-white" />,
    },
    {
      name: "Workshops",
      link: "/events/workshops",
      icon: <IconBook2 className="h-4 w-4 text-white" />,
    },
    {
      name: "Accommodations",
      link: "/events/accommodations",
      icon: <IconBed className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/events/contact",
      icon: <IconBed className="h-4 w-4 text-white" />,
    },
  ];


  return (
    <div className="fixed top-4 w-full z-[1000] flex flex-col items-center">
      <div className="relative w-[75%] sm:w-[80%] md:w-[70%] lg:w-[900px]">
        {/* Navbar */}
        <div className="relative">
          <FloatingNav
            navItems={navItems}
            className="bg-purple-900/30 backdrop-blur-md shadow-[0_0_20px_rgba(88,28,135,0.7)] border-purple-600/50 text-white font-monoton"
          />

          {/* Departments Dropdown */}
          <AnimatePresence>
            {showDepartments && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-[-1px] sm:left-[120px] md:left-[170px] top-[calc(100%+5px)] w-48 rounded-md shadow-lg bg-purple-900/90 backdrop-blur-md ring-1 ring-purple-500 ring-opacity-5"
                
                onMouseEnter={() => setShowDepartments(true)}
                onMouseLeave={() => setShowDepartments(false)}
              >
                {/* Add a decorative arrow */}
                <div className="absolute -top-2 left-[50%] -translate-x-1/2 w-4 h-4 rotate-45 bg-purple-900/90 z-[-1]"></div>
                
                <div className="relative py-1 rounded-md bg-purple-900/90">
                  {departments.map((department, index) => (
                    <a
                      key={index}
                      href={`/associations/department/${department.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-white hover:bg-purple-800/50 transition-colors duration-150"
                    >
                      {department}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}