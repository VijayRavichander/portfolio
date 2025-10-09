"use client";

import Image from "next/image";
// Removed Button in favor of a custom CTA style
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    name: "litecode",
    description:
      "A minimal LeetCode-style practice app that's fast and focused.",
    link: "https://litecode.vijayravichander.com",
  },
  {
    name: "nano photoAI",
    description: "Image and Create at ease with AI",
    link: "https://photoai.vijayravichander.com",
  },
  {
    name: "colpali-distill",
    description: "Improving document retrieval with late interaction and distillation",
    link: "https://github.com/VijayRavichander/colpali-distill",
  }
];

export const ProjectCards = () => {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const transition = { type: "spring", duration: 0.2, bounce: 0 };
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="text-base md:text-xl font-bold tracking-tight text-white/80 font-newsreader">
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            layoutId={`card-${project.name}`}
            className="group cursor-pointer rounded-xl text-white/95 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-[0_2px_0_rgba(0,0,0,0.03)] transition-shadow overflow-hidden"
            whileTap={{ scale: 0.98 }}
            onClick={() => setActive(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(project);
            }}
            tabIndex={0}
            role="button"
            aria-label={`Open ${project.name}`}
            transition={transition}
          >
            <motion.div
              layoutId={`title-${project.name}`}
              className="py-3 flex flex-col gap-2"
              transition={transition}
            >
              <div className="text-xl italic leading-snug font-serif text-white/95">
                <Link href={project.link} target="_blank" className="hover:text-brand-light">
                  {project.name}{" "}
                  <ArrowUpRight
                    strokeWidth={1}
                    className="inline ml-1 h-6 w-6 text-neutral-400"
                  />
                </Link>
              </div>
              <div className="text-sm text-white/70">{project.description}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[120]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setActive(null)}
            />
            <div className="relative mx-auto mt-16 w-[92%] max-w-3xl">
              <motion.div
                layoutId={`card-${active.name}`}
                className="relative rounded-2xl border border-neutral-200 bg-card shadow-xl overflow-hidden"
                transition={transition}
              >
                <motion.button
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-full bg-neutral-900/70 text-white hover:bg-neutral-900/80 h-8 w-8"
                  layoutId={`close-${active.name}`}
                  transition={transition}
                >
                  <X className="h-4 w-4" />
                </motion.button>
                <motion.div
                  layoutId={`image-${active.name}`}
                  className="relative h-56 md:h-80"
                  transition={transition}
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </motion.div>
                <motion.div className="p-6" transition={transition}>
                  <motion.div
                    layoutId={`title-${active.name}`}
                    transition={transition}
                    className="flex items-center justify-between gap-3"
                  >
                    <h3 className="text-2xl font-semibold text-slate-900 leading-snug">
                      {active.name}
                    </h3>
                    <span className="shrink-0 text-xs text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">
                      {active.status}
                    </span>
                  </motion.div>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    {active.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shadow-sm ring-1 ring-inset ring-white/10"
                    >
                      Open Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence> */}
    </>
  );
};
