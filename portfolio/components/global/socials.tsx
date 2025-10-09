import { File, Github, Linkedin } from "lucide-react";

const Socials = () => {
  return (
    <>
      <div className="text-base md:text-xl py-3 font-bold tracking-tight text-white/80 font-newsreader">
        Connect
      </div>
      <div className="flex items-center gap-3">
        <a
          className="font-xs text-white/80 hover:underline"
          href="https://github.com/VijayRavichander"
          target="_blank"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          className="font-xs text-white/80 hover:underline"
          href="https://www.linkedin.com/in/vijay-ravichander01/"
          target="_blank"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          className="font-xs text-white/80 hover:underline"
          href="https://drive.google.com/file/d/1OJBoCOwZglYJj9wRtIlkFk81sra8QSdQ/view?usp=sharing"
          target="_blank"
          aria-label="Resume"
        >
          Resume
        </a>
        <a
          className="font-xs text-white/80 hover:underline"
          href=""
          target="_blank"
          aria-label="Instagram"
        >
          X
        </a>
      </div>
    </>
  );
};

export default Socials;
