import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, Link2, LinkIcon } from "lucide-react";


const projects = [
  {
    name: "LiteCode",
    status: "Production",
    description:
      "A streamlined coding practice platform that executes and evaluates code submissions in real-time using Judge0's API, with Next.js powering the frontend and Redis handling caching for optimal performance. This nano version of LeetCode features a robust code execution engine, problem-solving workspace, and efficient result validation",
    link: "https://github.com/VijayRavichander/litecode",
    image:
      "https://plus.unsplash.com/premium_photo-1664640458531-3c7cca2a9323?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "nano-LoRAX",
    status: "Production",
    description:
      "FastAPI-based server that acts as a proxy to dynamically download, load, and unload LoRA (Low-Rank Adaptation) adapters for your vLLM server",
    link: "https://github.com/VijayRavichander/nano-LoRAX",
    image:
      "https://plus.unsplash.com/premium_photo-1664640458531-3c7cca2a9323?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "nano-PhotoAI",
    status: "Production",
    description:
      "AI Image platform with generation and model training capabilities. Generate photorealistic images through the Flux model in approximately 15 seconds, while also having the ability to train personalized models under 5 mins",
    link: "https://photoai.vijayravichander.com",
    image:
      "https://plus.unsplash.com/premium_photo-1664640458531-3c7cca2a9323?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "nanoBolt",
    status: "Work in Progress",
    description: "A  modern AI-powered development (nano) platform that transforms natural language into fully functional web applications. Built with React, TypeScript, and Gemini, this project showcases seamless code generation",
    link: "https://github.com/VijayRavichander/nanoBolt",
    image:
      "https://plus.unsplash.com/premium_photo-1664640458531-3c7cca2a9323?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "LMSys",
    status: "Production",
    description:
      "A Small Language Model Trained that will help your rank your LLM Responses.",
    link: "https://github.com/VijayRavichander/LMSys",
    image:
      "https://plus.unsplash.com/premium_photo-1664640458531-3c7cca2a9323?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const ProjectCards = () => {
  return (
    <div className="flex flex-col gap-x-24 gap-y-10 min-w-screen">
      {projects.map((project, index) => (
        <div className="flex justify-between " key = {index}>
          <div className="flex flex-col items-center max-w-2xl ">
            <div className="">
              <div className="text-3xl font-bold tracking-tight ">{project.name}</div>
              <div className="text-xl font-extralight tracking-tight my-10 text-blue-200">{project.description}</div>
              <a href = {project.link} target="_blank">
              <Button>Link<ArrowUpRight/></Button>
              </a>
            </div>
          </div>
          <div className="mx-28 hidden lg:block my-10">
            <Image
              src={project.image}
              width={200}
              height={200}
              alt={project.name}
              className="rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
