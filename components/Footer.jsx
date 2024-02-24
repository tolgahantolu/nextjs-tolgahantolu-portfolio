import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="sm:mt-20 mt-10 py-4 w-full h-full flex sm:flex-row flex-col justify-center items-center">
      <p className="flex-1 text-paragraph sm:text-left text-center">
        2023 &copy; Tolgahan Tolu. All Rights Reserved
      </p>
      <div className="flex flex-row gap-x-5 mt-5 sm:mt-0">
        <Link
          href="https://twitter.com/tolgakodluyor"
          target="_self"
          referrerPolicy="no-referrer"
          className="transition duration-500 p-3 border border-paragraph rounded-full text-paragraph hover:bg-[#1da1f2]"
        >
          <FaXTwitter fontSize={15} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tolgahant/"
          target="_self"
          referrerPolicy="no-referrer"
          className="transition duration-500 p-3 border border-paragraph rounded-full text-paragraph hover:bg-[#0a5881]"
        >
          <FaLinkedinIn fontSize={16} />
        </Link>
        <Link
          href="https://github.com/tolgahantolu"
          target="_self"
          referrerPolicy="no-referrer"
          className="transition duration-500 p-3 border border-paragraph rounded-full text-paragraph hover:bg-[#000]"
        >
          <FaGithub fontSize={16} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
