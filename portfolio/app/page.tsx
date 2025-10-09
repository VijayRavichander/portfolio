"use client";

import { Github, Linkedin, File, Hammer } from "lucide-react";
import { motion } from "framer-motion";
import Experience from "@/components/global/experience";
import Socials from "@/components/global/socials";
import { ProjectCards } from "@/components/global/project-card";

export default function Home() {
  const techStack = [
    {
      category: "Artificial Intelligence",
      tools: ["PyTorch", "vLLM"],
    },
    {
      category: "Software Development",
      tools: [
        "Next.js",
        "React",
        "Tailwind",
        "Hono",
        "Flask",
        "Express",
        "Postgres",
        "Redis",
        "Kafka",
      ],
    },
    {
      category: "DevOps & MLOps",
      tools: ["AWS", "Kubernetes", "Docker"],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pb-6 pt-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <h1 className="mt-2 text-2xl font-normal tracking-tight text-white/95 ">
                Always Building!
              </h1>
            </div>

            <p className="mt-4 max-w-3xl font-normal text-base text-white/70">
              Passionate about crafting AI-first software that&apos;s reliable,
              fast and a joy to work with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 text-white/95">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="text-base md:text-xl font-bold tracking-tight text-white/80 font-newsreader pb-2">
              Education
            </div>
            <div>Master of Science, AI @ Viterbi, USC</div>
          </motion.div>
        </div>
      </section>

      {/* Experience*/}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Experience />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjectCards />
          </motion.div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Socials />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
