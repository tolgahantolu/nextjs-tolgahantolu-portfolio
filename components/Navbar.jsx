import Image from "next/image";
import { useState } from "react";
import { close, menu } from "/public";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full h-20 flex justify-center items-center">
      <Link href="#about" className="text-[28px] font-bold font-poppins">
        Tolgahan<span className="text-gradient">.</span>
      </Link>
      <ul className="list-none sm:flex flex-row gap-x-5 justify-end items-center flex-1 hidden font-poppins">
        <li className="transition duration-500 text-green text-lg py-2 px-4 border border-green hover:text-headline hover:bg-green rounded-3xl">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="transition duration-500 hover:text-green">
          <Link href="#about">About</Link>
        </li>
        <li className="transition duration-500 hover:text-green">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="transition duration-500 hover:text-green">
          <Link href="#works">Works</Link>
        </li>
        <li className="transition duration-500 hover:text-green">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggleMenu ? close : menu}
          alt="toggle menu"
          className="cursor-pointer w-[25px] h-[25px] object-contain"
          onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
        />

        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } bg-black-gradient absolute top-[60px] right-10 my-4 p-6 min-w-[140px] rounded-xl sidebar z-[5]`}
        >
          <ul className="list-none flex-1 flex flex-col justify-center items-center gap-y-5 font-poppins">
            <li className="transition duration-500 text-green text-lg py-2 px-4 border border-green hover:text-headline hover:bg-green rounded-3xl">
              <Link
                href="/blog"
                onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
              >
                Blog
              </Link>
            </li>
            <li className="transition duration-500 hover:text-green">
              <Link
                href="#about"
                onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
              >
                About
              </Link>
            </li>
            <li className="transition duration-500 hover:text-green">
              <Link
                href="#skills"
                onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
              >
                Skills
              </Link>
            </li>
            <li className="transition duration-500 hover:text-green">
              <Link
                href="#works"
                onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
              >
                Works
              </Link>
            </li>
            <li className="transition duration-500 hover:text-green">
              <Link
                href="#contact"
                onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
