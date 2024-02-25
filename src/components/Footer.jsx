"use client";

// import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import CopyRight from "./CopyRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-scroll";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-20 bg-white z-20 xl:pl-[235px] pl-[75px] p-[15px]">
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link to={"home"} smooth={true} spy={true} className="cursor-pointer">
              <Image src={"/icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur reprehenderit!
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123) 456-23423</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@darland.gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:items-center ">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  {" "}
                  <a href="">New york</a>
                </li>
                <li>
                  {" "}
                  <a href="">Careers</a>
                </li>
                <li>
                  {" "}
                  <a href="">Mobile</a>
                </li>
                <li>
                  {" "}
                  <a href="">Blog</a>
                </li>
                <li>
                  {" "}
                  <a href="">How we Work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 mb-8 font-bold">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="text-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="text-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun</div>
                <div className="text-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div>1</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
