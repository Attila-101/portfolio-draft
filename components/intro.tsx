"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import Button from "./button";
import { motion } from "framer-motion";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      className="h-[90vh] lg:h-screen 2xl:h-[80vh] 2xl:mt-[10vh] scroll-mt-56"
      id="home"
      ref={ref}
    >
      <section className=" relative lg:w-[67.5rem] lg:h-[28.5rem] lg:grid lg:grid-cols-12 lg:grid-rows-5 lg:gap-4">
        <div className="overflow-hidden max-h-[48vh] max-w-[22rem] lg:max-h-none lg:max-w-none lg:col-start-8 lg:col-span-4 lg:row-start-1 lg:row-span-5 lg:z-10">
          <motion.div
            initial={{ opacity: 1, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="bg-[url('/dots-background.svg')] max-h-[48vh] max-w-[22rem] lg:max-h-none lg:max-w-none lg:bg-none lg:col-start-8 lg:col-span-4 lg:row-start-1 lg:row-span-5 lg:mt-1 lg:z-10"
          >
            <motion.div>
              <Image
                src="/Attila.png"
                alt="Attila"
                width={2400}
                height={3020}
                quality="100"
                priority={true}
                className="max-h-[48vh] lg:max-h-none mt-[0.313rem] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
        <motion.h1
          initial={{ x: -1200, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.3,
          }}
          className="text-[2.438rem] text-center mt-4 lg:text-left lg:col-span-6 lg:row-start-2 lg:row-span-2 lg:text-[5rem] lg:leading-[5rem] lg:-mt-[1.5rem] lg:z-10"
        >
          Hi, my <br className="hidden lg:block"></br> name is{" "}
          <span className="font-bold">
            <br className="lg:hidden"></br>Attila
          </span>
        </motion.h1>
        <motion.h2
          initial={{ x: -1200, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
          }}
          className="text-center mt-4 lg:text-left lg:col-span-6 row-start-4 row-span-1 lg:text-[1.5rem] leading-[2rem] lg:-mt-[1.5rem] lg:tracking-widest lg:z-10"
        >
          I'm a <span className="font-bold">Full-Stack Web Developer</span>{" "}
          <br></br>based in Reykjavik
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 2,
          }}
        >
          <Button
            link={"#about"}
            extraClassName={"hidden  lg:flex lg:absolute lg:bottom-2"}
          >
            Discover More
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "tween",
          }}
          className=" lg:bg-[url('/dots-background.svg')] lg:absolute lg:col-start-5 lg:row-start-3 lg:-mt-[2.1rem] lg:h-[18.5rem] lg:w-[45rem] "
        ></motion.div>
      </section>
    </section>
  );
}
