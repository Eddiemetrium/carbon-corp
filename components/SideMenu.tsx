import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navVariants } from "../utils/motion";
import CarbonCorp from "../public/carbon corp 2.png"

const SideMenu: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="uppercase font-extrabold text-[24px] leading-[30px]">
              Menu
            </h2>
            <button onClick={toggleMenu}>
              <Image src="/Close.svg" alt="close" width="24" height="24" />
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="uppercase font-extrabold text-[24px] leading-[30px]"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase font-extrabold text-[24px] leading-[30px]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase font-extrabold text-[24px] leading-[30px]"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase font-extrabold text-[24px] leading-[30px]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <motion.button
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="fixed bottom-4 right-4 z-50 bg-white p-3 rounded-full"
        onClick={toggleMenu}
      >
        <Image src={CarbonCorp} alt="menu" width="24" height="24" />
      </motion.button>
    </div>
  );
};

export default SideMenu;
