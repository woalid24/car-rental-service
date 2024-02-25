"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import React from "react";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Why = () => {
  return (
    <section className="section flex items-center p-[15px]" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from the
          competition. From the moment you engage with us, we strive to exceed your
          expectations in every interaction
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2 "
        >
          <Image src={"/images/why/car.svg"} width={1060} height={420} alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey classname="text-[38px] text-accent-DEFFAULT mb-4 " />
            <h3 className="h3">Rent simply and quickly</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your experience
              with us is nothing short of outstanding.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp classname="text-[38px] text-accent-DEFFAULT mb-4 " />
            <h3 className="h3">Mdern & well maintained vehicles</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your experience
              with us is nothing short of outstanding.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake classname="text-[38px] text-accent-DEFFAULT mb-4 " />
            <h3 className="h3">Prompt and flexible services</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your experience
              with us is nothing short of outstanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
