"use client";

import React from "react";
import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Button from "./button";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section className="mx-2 lg:mb-4 scroll-mt-28" id="projects" ref={ref}>
      <motion.div
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
      >
        <SectionHeading>Projects</SectionHeading>
      </motion.div>
      {/* TEXT LEFT */}
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
        className="lg:mb-28"
      >
        <div className="flex flex-col lg:flex-row lg:w-[67.5rem] lg:gap-12">
          <section className="lg:w-[33.75rem] mb-12 order-last lg:order-first">
            <h3 className="font-bold text-[1.5rem] lg:tracking-wider lg:mb-[2rem] mb-[1.2rem]">
              gullfoss<span className="text-secondary text-[0.5rem]"> ■ </span>
              is
            </h3>
            <p className="lg:text-[1rem] lg:leading-8 lg:mb-4 mb-2">
              This is the website of the service center at Gullfoss Waterfall
              which is one of the biggest tourist attractions in Iceland. I am
              developing a brand new e-commerce website for them from the ground
              up. This is an ongoing project.
            </p>
            <ul className="lg:flex lg:gap-8 lg:mb-4 mb-2">
              <li>
                <span className="text-secondary text-[0.6rem] align-middle">
                  ◼
                </span>
                &ensp; Wordpress
              </li>
              <li>
                <span className="text-secondary text-[0.6rem] align-middle">
                  ◼
                </span>
                &ensp; PHP
              </li>
              <li>
                <span className="text-secondary text-[0.6rem] align-middle">
                  ◼
                </span>
                &ensp; WooCommerce
              </li>
              <li>
                <span className="text-secondary text-[0.6rem] align-middle">
                  ◼
                </span>
                &ensp; CSS
              </li>
            </ul>
            <div className="flex justify-start lg:w-[33.75rem] gap-2 lg:gap-4">
              <Button link={"https://gullfoss.is/"} target={"_blank"}>
                <FiArrowUpRight
                  size={16}
                  className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Button>
            </div>
          </section>
          {/* VIDEO */}
          <section className="group mb-8 lg:mb-0 lg:w-[33.75rem] relative">
            <div className="relative w-full max-w-screen-md">
              <Image
                src="/laptop.png"
                alt="Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto lg:group-hover:scale-150 lg:group-hover:ease-in-out lg:duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full ml-[13%] mt-[-3%]">
                  <HoverVideoPlayer
                    videoSrc="/gullfossVideo.mp4"
                    className="w-[85%] lg:group-hover:scale-150 lg:group-hover:mt-[-4%] lg:group-hover:w-[85.5%] lg:group-hover:ease-in-out lg:duration-300"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
      {/* TEXT RIGHT */}
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
        className="lg:mb-28 "
      >
        <div className="flex flex-col lg:flex-row lg:w-[67.5rem] lg:gap-12">
          <section className="lg:w-[33.75rem] mb-12 order-last ">
            <h3 className="font-bold text-[1.5rem] lg:tracking-wider lg:mb-[2rem] mb-[1.2rem]">
              arsskyrsla-2021
              <span className="text-secondary text-[0.5rem]"> ■ </span>
              lifbru
              <span className="text-secondary text-[0.5rem]"> ■ </span>is
            </h3>
            <p className="lg:text-[1rem] lg:leading-8 lg:mb-4 mb-2">
              This project was for an Icelandic pension fund which I worked on
              at Kolibri digital agency. The work was done using agile
              methodologies.
            </p>
            <div className="lg:flex lg:justify-between lg:w-[31.5rem] lg:leading-8 lg:mb-4 mb-2">
              <ul>
                <li>
                  <span className="text-secondary text-[0.6rem] align-middle">
                    ◼
                  </span>
                  &ensp; Next.js
                </li>
                <li>
                  <span className="text-secondary text-[0.6rem] align-middle">
                    ◼
                  </span>
                  &ensp; Prismic
                </li>
              </ul>
              <ul>
                <li>
                  <span className="text-secondary text-[0.6rem] align-middle">
                    ◼
                  </span>
                  &ensp; TypeScript
                </li>
                <li>
                  <span className="text-secondary text-[0.6rem] align-middle">
                    ◼
                  </span>
                  &ensp; Framer Motion
                </li>
              </ul>
              <ul>
                <li>
                  <span className="text-secondary text-[0.6rem] align-middle">
                    ◼
                  </span>
                  &ensp; SCSS
                </li>
              </ul>
              <ul>
                <li>
                  <span className="text-secondary text-[0.6rem] align-middle">
                    ◼
                  </span>
                  &ensp; GraphQL
                </li>
              </ul>
            </div>
            <div className="flex justify-start lg:w-[33.75rem] gap-2 lg:gap-4">
              <Button
                link={"https://arsskyrsla-2021.lifbru.is/"}
                target={"_blank"}
              >
                <FiArrowUpRight size={16} />
              </Button>
            </div>
          </section>
          {/* VIDEO */}
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
            className="group mb-8 lg:mb-0 lg:w-[33.75rem] relative"
          >
            <div className="relative w-full max-w-screen-md">
              <Image
                src="/laptop.png"
                alt="Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto lg:group-hover:scale-150 lg:group-hover:ease-in-out lg:duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full ml-[13%] mt-[-3%]">
                  <HoverVideoPlayer
                    videoSrc="/bruVideo.mp4"
                    className="w-[85%] lg:group-hover:scale-150 lg:group-hover:ease-in-out lg:duration-300 lg:group-hover:mt-[-4%] lg:group-hover:w-[85.5%]"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.section>
      {/* TEXT LEFT */}
      <section className="mb-16 lg:mb-28">
        <div className="flex flex-col lg:flex-row lg:w-[67.5rem] mb-0 lg:mb-16">
          <section className="lg:w-[33.75rem] mb-12 order-last lg:order-first">
            <h3 className="font-bold text-[1.5rem] lg:tracking-wider lg:mb-[2rem] mb-[1.2rem]">
              nextjs-rendering-phi
              <span className="text-secondary text-[0.5rem]"> ■ </span>vercel
              <span className="text-secondary text-[0.5rem]"> ■ </span>app
            </h3>
            <p className="lg:text-[1rem] lg:leading-8 lg:mb-4 mb-2">
              I created this demo for a workshop that I held on the different
              Next.js rendering methods at the Reykjavik Academy of Web
              Development.
            </p>
            <ul className="lg:flex lg:gap-8 lg:mb-4 mb-2">
              <li>
                <span className="text-secondary text-[0.6rem] align-middle">
                  ◼
                </span>
                &ensp; Next.js
              </li>
              <li>
                <span className="text-secondary text-[0.6rem] align-middle">
                  ◼
                </span>
                &ensp; Heroku
              </li>
            </ul>
            <div className="flex justify-start lg:w-[33.75rem] gap-2 lg:gap-4">
              <Button
                link={"https://github.com/Attila-101/nextjs-rendering"}
                target={"_blank"}
              >
                <FiGithub size={16} />
              </Button>
              <Button
                link={"https://nextjs-rendering-phi.vercel.app/"}
                target={"_blank"}
              >
                <FiArrowUpRight size={16} />
              </Button>
            </div>
          </section>
          {/* VIDEO */}
          <section className="group mb-8 lg:mb-0 lg:w-[33.75rem] relative">
            <div className="relative w-full max-w-screen-md">
              <Image
                src="/laptop.png"
                alt="Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto lg:group-hover:scale-150 lg:group-hover:ease-in-out lg:duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full ml-[13%] mt-[-3%]">
                  <HoverVideoPlayer
                    videoSrc="/nextJsVideo.mp4"
                    className="w-[85%] lg:group-hover:scale-150 lg:group-hover:mt-[-4%] lg:group-hover:w-[85.5%] lg:group-hover:ease-in-out lg:duration-300"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex text-centr justify-center">
          <Button link={"archive"}>More Projects</Button>
        </div>
      </section>
    </section>
  );
}
