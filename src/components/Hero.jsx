"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/app/context/search";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "/variants";

const Hero = () => {
  const { SaerchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 xl:pl-[107px]" id="home">
      <div className="container max-auto h-full xl:pt-10 ">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent-DEFFAULT"> Global</span> Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 nb-6 xl:mb-10"
            >
              Find your ideal ride for any adventure with our divers range of affordable and dependable car rentals.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start pt-2"
            >
              <button className="btn-cta">
                <Image src={"/icons/buttons/app-store.svg"} width={132} height={35}  />
              </button>
              <button className="btn-cta">
                <Image src={"/icons/buttons/google-play.svg"} width={132} height={35} />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-[148px]"
          >
            <Image src={"/images/hero/car.svg"}  alt=""  width={1332} height={335} />
          </motion.div>
        </div>
      </div>
      {SaerchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="-mt-12 w-full max-w-[1300px] mx-auto"
        >
          <Search />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
