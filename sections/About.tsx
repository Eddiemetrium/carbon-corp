import { motion } from "framer-motion";
import TypingText from "../components/TypingText";

import { fadeIn, staggerContainer } from "../utils/motion";

const About: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
    >
      <TypingText title="| About Carbon Corp" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-slate-300"
      >
        <span className="font-extrabold text-white">Carbon Corp</span> is your ally in sustainability, providing tools to track and reward your carbon freeprint. Earn rewards for eco-friendly actions join us in shaping a greener tomorrow.
        <span className="font-extrabold text-white">Carpon Corp</span>
        of today, using only
        <span className="font-extrabold text-white">Carbon Credits</span>can
        easily <span className="font-extrabold text-white">explore</span> the
        Carbon free world you want, turn your dreams into reality. Let&apos;s
        explore the Carbon Corp by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/ArrowDown.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
