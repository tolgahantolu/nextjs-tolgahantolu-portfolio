import Link from "next/link";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const SectionButton = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full text-base sm:text-lg bg-gradient-to-r from-dimGreen to-green flex items-center justify-center gap-1"
    >
      {text} <AiOutlineCaretRight />
    </Link>
  );
};

export default SectionButton;
