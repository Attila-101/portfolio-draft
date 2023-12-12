"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import Button from "./button";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mx-2 mb-16 lg:w-[56rem] lg:mb-28 scroll-mt-28"
      id="skills"
      ref={ref}
    >
      <SectionHeading>Skills</SectionHeading>
      <div className="mb-16">
        <ul className="leading-8 grid grid-cols-2 grid-rows-10 gap-x-4 ml-4 lg:grid-cols-5 lg:grid-rows-4 lg:justify-between">
          <li>
            <span className="text-secondary">◼</span>&ensp; JavaScript
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; TypeScript
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; GraphQL
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Python
          </li>

          <li>
            <span className="text-secondary">◼</span>&ensp; HTML
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; CSS
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; React
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Next.js
          </li>

          <li>
            <span className="text-secondary">◼</span>&ensp; ReactNative
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Tailwind
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; GitHub
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Vercel
          </li>

          <li>
            <span className="text-secondary">◼</span>&ensp; Heroku
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Node.js
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; MongoDB
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Docker
          </li>

          <li>
            <span className="text-secondary">◼</span>&ensp; Prismic
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; WordPress
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; FramerMotion
          </li>
          <li>
            <span className="text-secondary">◼</span>&ensp; Figma
          </li>
        </ul>
      </div>
      <div className="flex text-centr justify-center">
        <Button link={"/Attila-CV.pdf"}>Download CV</Button>
      </div>
    </motion.section>
  );
}
