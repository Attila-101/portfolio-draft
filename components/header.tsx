"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();
  return (
    <header className="z-[999] relative ">
      {pathname === "/" ? (
        <>
          <motion.div
            className="fixed top-0 h-[4.5rem] w-[500rem] bg-white  bg-opacity-80 backdrop-blur-[0.5rem] shadow-sm dark:shadow-gray-400 sm:h-[3.25rem]  sm:rounded-full dark:bg-gray-900 dark:bg-opacity-75"
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: "-50%", opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 2.2,
            }}
          ></motion.div>
          <nav className="flex fixed top-[0.8rem] sm:top-[-0.313rem] left-1/2 h-12 -translate-x-1/2 py-2  sm:h-[initial] ">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {links.map((link) => (
                <motion.li
                  className="nav transition h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 2.2,
                  }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 transition dark:text-white",
                      {
                        " dark:text-white": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-secondary absolute -inset-1 -z-10 dark:bg-secondary"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
