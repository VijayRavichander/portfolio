"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/" },
    // { label: "Blog", href: "/blog" },
  ];

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname?.startsWith(href);
  };

  const navItemClasses = (href: string) => {
    const base =
      "rounded-lg p-2 active:scale-[0.97] duration-300 ease-out transition-all hover:underline";
    const active = "bg-brand-light text-black";
    const inactive = "text-white/90";

    return `${base} ${isActivePath(href) ? active : inactive}`;
  };

  const ref = useRef(null);
  const buttonRef = useRef(null);

  useOnClickOutside([ref, buttonRef], () => {
    setIsOpen(false);
  });

  return (
    <div className="fixed top-4 left-0 right-0 z-[100]">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative flex items-center justify-between rounded-2xl border border-brand-default/70 bg-black/20 backdrop-blur-lg backdrop-saturate-150 shadow-[0_1px_0_rgba(0,0,0,0.03)] px-4 py-2">
          <aside className="flex items-center gap-[2px]">
            <Link href="/">
              <p className="text-xl md:text-2xl font-bold text-white">
                Vijay Ravichander
              </p>
            </Link>
          </aside>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 list-none text-base md:text-base">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={navItemClasses(href)}
                    aria-current={isActivePath(href) ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Responsive Dropdown  */}
          <div className="block md:hidden">
            <button
              className="p-2 text-white/90 hover:bg-brand-light rounded-lg transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              ref={buttonRef}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 md:hidden">
              <div className="px-1" ref={ref}>
                <nav className="rounded-xl border border-brand-default bg-black backdrop-blur-md shadow-md p-4">
                  <ul className="flex flex-col gap-4 list-none text-base">
                    {navItems.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={`${navItemClasses(href)} hover:bg-brand-default`}
                          aria-current={isActivePath(href) ? "page" : undefined}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
