"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import toast from "react-hot-toast";
import { PiPaperPlaneTilt } from "react-icons/pi";
import SubmitBtn from "./submit-btn";
import SectionHeading from "./section-heading";
import Button from "./button";
import { AiOutlineMail } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { GoMail } from "react-icons/go";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
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
      className="lg:w-[56rem] mb-28"
      id="contact"
      ref={ref}
    >
      <SectionHeading>Let's chat</SectionHeading>
      <div className="flex gap-4 mb-8 lg:mb-12">
        <Button link="mailto:attila@attila.dev">
          <GoMail size={32} stroke-width="0" className="p-1" />
        </Button>
        <Button
          link="https://www.linkedin.com/in/attila-balatoni/"
          target="_blank"
        >
          <RiLinkedinLine size={32} className="p-1" />
        </Button>
        <Button link="https://github.com/attila-101" target="_blank">
          <FiGithub size={32} className="p-1" />
        </Button>
      </div>
      <form
        className="flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 p-4 border border-primary dark:border-gray-400 mb-6 focus:outline-none focus:border-2"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
        />
        <textarea
          className="h-52 p-4 border border-primary dark:border-gray-400 focus:outline-none focus:border-2"
          name="message"
          placeholder="Your message"
          required
          maxLength={1000}
        />
        <div className="h-10"></div>
        <div className="flex text-centr justify-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
