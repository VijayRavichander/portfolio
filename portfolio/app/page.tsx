"use client";

import { ProjectCards } from "@/components/global/project-card";
import { Github, Linkedin, File } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/global/lamp";



export default function Home() {
  const techStack = [
    {
      category: "Artifical Intelligence",
      tools: ["Pytorch", "vLLM",],
    },
    {
      category: "Software Development",
      tools: ["NextJs", "React", "Tailwind", "Hono", "Flask", "Express", "Postgres", "Redis", "Kafka",],
    },
    {
      category: "DevOps and MLOps",
      tools: ["DevOps", "AWS", "Kubernetes", ],
    }
  ];
  return (
    <main className="">
      <section
        className="h-full min-w-full bg-neutral-950 rounded-md 
        !overflow-visible  relative flex flex-col items-center antialiased"
      >
        <div className="absolute inset-0 h-full min-w-full items-center px-5
           py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#225_100%)] "></div>
        <div className="mt-[100px] z-10 px-4 w-full">
          <div className="my-1">
            <div className="font-medium text-lg">
              Grad Student at{" "}
              <span className="text-red-400">
                University of Southern California
              </span>
            </div>
            <div className="font-semibold text-2x">
              Developing at the intersection of LLMs and Software Developement
            </div>
            <div>
              <div className="flex my-4">
                <div className="hover:text-green-300 px-2">
                  <a href="https://github.com/VijayRavichander" target="_blank">
                    <Github className="text-white h-6 w-6" />
                  </a>
                </div>
                <div className="hover:text-green-300 px-2">
                  <a href="https://www.linkedin.com/in/vijay-ravichander01/" target="_blank">
                    <Linkedin className="text-blue-600  h-6 w-6" />
                  </a>
                </div>
                <div className="hover:text-green-300 px-2">
                  <a href="https://drive.google.com/file/d/1aOrajvGS9YdZER8eKnQLKtvqPW7nFRTu/view?usp=sharing" target="_blank">
                    <File className="text-green-300  h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-5xl text-left py-4 font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 border-b-white/40 border-b-[1px] my-2">
            Projects
          </div>
          <div className="px-2 py-2 min-w-full">
            <ProjectCards />
          </div>
        </div>
        <div className="relative min-w-full mt-96">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-56 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div>
              <div className="text-5xl pt-36">Tech Stack</div>
              <div className="">
                <div className="text-lg">
                  {techStack.map((item, index) => (
                    <div key={index} className="my-14">
                      <div className="text-3xl text-violet-300 font-bold my-6">
                        {item.category}
                      </div>
                      <div className="flex flex-col sm:flex-row flex-wrap justify-center text-3xl">
                        {item.tools.map((tool, index) => (
                          <div key={index} className="mr-3 font-semibold items-center text-center">
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.h1>
        </LampContainer>
        </div>
      </section>
    </main>
  );
}
