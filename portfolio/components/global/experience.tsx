"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ExperienceItem = {
  company: string;
  title: string;
  description: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Stealth Startup (current)",
    title: "AI Engineer Intern",
    description: ["Working on Search for AI"],
  },
  {
    company: "Smartsoft International Inc",
    title: "Software Developer Intern",
    description: ["Metrics over magic: task success, precision/recall, groundedness, latency, cost.", "Small models, good manners—synthetic data + SFT + GRPO for real multi-hop wins.", "From “please wait” to “done”—async orchestration and tuned indexes for snappy search."]  
  },
  {
    company: "Program Warehouse",
    title: "Backend Engineer Intern",
    description: ["Guardrails over guesswork: auth, ACLs, and rate limits that keep the bad out and the good flowing.", "Queries with manners—indexes, pagination, and caching so responses feel instant, not improvised."],
  },
];    

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<ExperienceItem | null>(
    null,
  );
  const transition = { type: "spring", duration: 0.2, bounce: 0 };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveExperience(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-base md:text-xl font-bold tracking-tight text-white/80 font-newsreader">
          Experience
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 min-w-24 min-h-24">
        {experience.map((item) => (
          <ExperienceCard
            key={item.company}
            item={item}
            transition={transition}
            onOpen={() => setActiveExperience(item)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeExperience ? (
          <motion.div
            className="fixed inset-0 z-[120]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setActiveExperience(null)}
            />
            <div className="relative mx-auto mt-20 w-[92%] max-w-2xl">
              <motion.div
                layoutId={`experience-card-${activeExperience.company}`}
                className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/95 shadow-xl backdrop-blur"
                transition={transition}
              >
                <motion.button
                  aria-label="Close experience details"
                  onClick={() => setActiveExperience(null)}
                  className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <X className="h-4 w-4" />
                </motion.button>
                <motion.div
                  layoutId={`experience-header-${activeExperience.company}`}
                  className="border-b border-white/10 px-6 py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <motion.h3
                    layoutId={`experience-title-${activeExperience.company}`}
                    className="text-2xl font-semibold text-white/95"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                  >
                    {activeExperience.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`experience-company-${activeExperience.company}`}
                    className="mt-1 text-sm uppercase tracking-[0.25em] text-white/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                  >
                    {activeExperience.company}
                  </motion.p>
                </motion.div>
                <motion.div
                  layoutId={`experience-description-${activeExperience.company}`}
                  className="px-6 py-6 text-white/75 leading-relaxed flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  {activeExperience.description.map((description, index) => (
                    <div key={index} className="block p-1">{description}</div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const ExperienceCard = ({
  item,
  onOpen,
  transition,
}: {
  item: ExperienceItem;
  onOpen: () => void;
  transition: { type: string; duration: number; bounce: number };
}) => {
  return (
    <motion.div
      layoutId={`experience-card-${item.company}`}
      className="group cursor-pointer"
      transition={transition}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex gap-6 text-white/95 rounded-xl p-4 z-10 bg-neutral-950 shadow-bevel-s hover:shadow-bevel-l cursor-pointer">
        <motion.div
          layoutId={`experience-header-${item.company}`}
          className="flex flex-col gap-1 text-base"
          transition={transition}
        >
          <motion.h3
            layoutId={`experience-title-${item.company}`}
            className="text-white/90 font-semibold"
            transition={transition}
          >
            {item.title}
          </motion.h3>
          <motion.p
            layoutId={`experience-company-${item.company}`}
            className="text-white/70 text-sm"
            transition={transition}
          >
            {item.company}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
