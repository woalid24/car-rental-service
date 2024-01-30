"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flrx flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-warp xl:gap-x-6 xl:justify-between">
          <div>
            <Image src={"icons/brands/ford.svg"} width={85} height={32} alt={""} />
          </div>
          <div>
            <Image src={"icons/brands/mercedes.svg"} width={60} height={60} alt={""} />
          </div>
          <div>
            <Image src={"icons/brands/audi.svg"} width={85} height={50} alt={""} />
          </div>
          <div>
            <Image src={"icons/brands/bmw.svg"} width={60} height={60} alt={""} />
          </div>
          <div>
            <Image src={"icons/brands/vw.svg"} width={60} height={60} alt={""} />
          </div>
          <div>
            <Image src={"icons/brands/skoda.svg"} width={60} height={60} alt={""} />
          </div>
          <div>
            <Image src={"icons/brands/mazda.svg"} width={62} height={50} alt={""} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
