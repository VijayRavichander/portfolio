
import { cn } from "@/lib/utils";
// const projects = [
//   {
//     name: "LMSys",
//     status: "Production",
//     description:
//       "A Small Language Model Trained that will help your rank your LLM Responses.",
//     link: "lmsys.vijayravichander.com",
//     image:
//       "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "LiteCode",
//     status: "Production",
//     description:
//       "A lite version of Leetcode built with Next, Judge0, Redis and others",
//     link: "litecode.vijayravichander.com",
//     image:
//       "https://unsplash.com/photos/a-black-background-with-a-multicolored-swirl-WxGx9Wu9IWM",
//   },
//   {
//     name: "Zaps",
//     status: "Work In Progress",
//     description:
//       "Mini Zapier to automate your workflows of Gmail, Notion and others",
//     link: "lmsys.vijayravichander.com",
//     image:
//       "https://unsplash.com/photos/a-group-of-different-colored-lights-in-the-dark-2MLoOkVPdTs",
//   },
//   {
//     name: "Photo-AI",
//     status: "Work In Progress",
//     description:
//       "Train Flux Model and Generate cool images of yourself or anything you want",
//     link: "photoai.vijayravichander.com",
//     image:
//       "https://unsplash.com/photos/a-close-up-of-a-white-wall-with-wavy-lines-75xPHEQBmvA",
//   },
//   {
//     name: "Second Brain",
//     status: "Work in Progress",
//     description:
//       "Never Lose your important Twitter Bookmarks, Notion Pages, Research Papers",
//     link: "secondbrain.vijayravichander.com",
//     image:
//       "https://unsplash.com/photos/a-black-and-white-photo-of-a-marble-surface-UjupleczBOY",
//   },
// ];

export const ProjectCards = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-24 gap-y-10 mx-auto">
      <a href="https://www.lmsys.vijayravichander.com" target="_blank">
        <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[linear-gradient(to_bottom,_#000000,_#1e3a8a,_#3b82f6)] bg-cover"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                LMSys
              </h1>
              <p className="Never Lose your important Twitter Bookmarks, Notion Pages, Research Papers text-base text-gray-50 relative my-4">
              A compact language model designed to rank LLM responses and facilitate the generation of preference alignment data.
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://github.com/VijayRavichander/litecode" target="_blank">
        <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[linear-gradient(to_bottom,_#000000,_#1e3a8a,_#3b82f6)] bg-cover"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                LiteCode
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-4">
                A lite version of Leetcode built with Next, Judge0, Redis and
                others
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://github.com/VijayRavichander/LMSys" target="_blank">
        <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[linear-gradient(to_bottom,_#000000,_#333333)] bg-cover"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                Zaps
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-4">
                Mini Zapier to automate your workflows of Gmail, Notion and
                others
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://github.com/VijayRavichander" target="_blank">
        <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[linear-gradient(to_bottom,_#000000,_#4b0082)] bg-cover"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                Photo AI
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-4">
                Train Flux Model and Generate cool images of yourself or
                anything you want
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://github.com/VijayRavichander" target="_blank">
        <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[linear-gradient(to_bottom,_#000000,_#2f2f2f)] bg-cover"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                Second Brain
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-4">
                Never Lose your important Twitter Bookmarks, Notion Pages,
                Research Papers
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
