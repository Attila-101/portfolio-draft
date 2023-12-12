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
      className="mx-2 mb-16 text-center lg:w-[56rem] lg:mb-28 scroll-mt-28"
      id="about"
      ref={ref}
    >
      <SectionHeading>About</SectionHeading>
      <p className="lg:text-[1rem] lg:leading-8">
        I am a web developer with a diverse set of technical and interpersonal
        skills. I graduated from{" "}
        <span>
          <a
            href="https://tskoli.is/namsbraut/vefthroun/"
            target="_blank"
            className="font-bold"
          >
            Vefskólinn
          </a>
        </span>{" "}
        in 2021, then worked as trainee at{" "}
        <span>
          <a
            href="https://www.kolibri.is/"
            target="_blank"
            className="font-bold"
          >
            Kolibri
          </a>
        </span>{" "}
        and professionally as a freelancer. My background spans a wide range of
        additional fields including law and international event management. I
        co-founded a travel agency in Iceland and brought two innovative ideas
        to market in the Icelandic tourism industry:{" "}
        <span>
          <a
            href="https://www.buubble.com/"
            target="_blank"
            className="font-bold"
          >
            Bubbles
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a
            href="https://www.huffpost.com/entry/iceland-northern-lights-tour_n_6220602"
            target="_blank"
            className="font-bold"
          >
            Floating
          </a>
        </span>
        .
      </p>
    </motion.section>
  );
}
