"use client";

import { motion } from "framer-motion";
import Experience from "@/components/global/experience";
import Socials from "@/components/global/socials";
import { ProjectCards } from "@/components/global/project-card";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4, delay: index * 0.25 },
    }),
  };

  return (
    <main>
      {/* Hero */}
      <motion.section
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="pb-6 pt-24"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="mt-2 text-2xl font-normal tracking-tight text-white/95 ">
                Always Building!
              </h1>
            </div>

            <p className="mt-4 max-w-3xl font-normal text-base text-white/70">
              Crafting AI-first software that&apos;s reliable,
              fast and a joy to work with
            </p>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-6"
      >
        <div className="max-w-5xl mx-auto px-4 text-white/95">
          <div>
            <div className="text-base md:text-xl font-bold tracking-tight text-white/80 font-newsreader pb-2">
              Education
            </div>
            <div>Master&apos;s in Computer Science, AI @ Viterbi, USC</div>
          </div>
        </div>
      </motion.section>

      {/* Experience*/}
      <motion.section
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-6"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div>
            <Experience />
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        custom={3}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-6"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div>
            <ProjectCards />
          </div>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        custom={4}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-6"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div>
            <Socials />
          </div>
        </div>

      </motion.section>
    </main>
  );
}
