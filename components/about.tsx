"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

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
      className="mb-16 text-center lg:w-[56rem] lg:mb-28 scroll-mt-28"
      id="about"
      ref={ref}
    >
      <SectionHeading>About</SectionHeading>
      <p className="lg:text-[1rem] lg:leading-8">
        I am a web developer with a diverse set of technical and human skills. I
        graduated from The Reykjavik Academy of Web Development, gained
        experience at a digital agency and by working as a freelancer.
        Additionally, my background spans a wide range of other fields from law
        to international event management. I co-founded a travel agency and
        brought two innovative ideas (
        <span>
          <a
            href="https://www.buubble.com/"
            target="_blank"
            className="font-bold"
          >
            Bubbles
          </a>
        </span>
        ,{" "}
        <span>
          <a
            href="https://www.huffpost.com/entry/iceland-northern-lights-tour_n_6220602"
            target="_blank"
            className="font-bold"
          >
            Floating
          </a>
        </span>
        ) to market in the Icelandic tourism industry.
      </p>
    </motion.section>
  );
}
