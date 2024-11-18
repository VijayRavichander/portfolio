import Link from "next/link";
const NavBar = async () => {
  return (
    <header
      className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 *
        backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900
        justify-between"
    >
      <aside className="flex items-center gap-[2px]">
      <Link href="/"><p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">Vijay Ravichander</p></Link>
        
      </aside>
      <nav
        className="hidden md:block"
      >
        <ul className="flex items-center gap-4 list-none text-xl">
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      {/* Responsive Dropdown  */}
    </header>
  );
};

export default NavBar;
