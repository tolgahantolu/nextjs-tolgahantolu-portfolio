import { tolgahan } from "/public";
import {
  FaReact,
  FaSass,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiApollographql, SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="hero xs:py-20 py-10 w-full flex md:flex-row xxs:flex-col xxs:gap-y-5 justify-center items-center relative"
      id="about"
    >
      <Image
        src={tolgahan}
        alt="tolgahan tolu"
        className="w-[250px] h-[250px] xs:w-[350px] xs:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] object-contain rounded-full outline outline-4 outline-headline hero-shadow"
      />

      <div className="badge flex items-center bg-badge px-6 py-3 rounded-xl text-lg xs:text-[22px] text-lightB font-medium font-poppins md:absolute md:top-[60px] md:left-[120px] xxs:relative xxs:top-0 xxs:left-0">
        <span className="text-[25px] xs:text-[32px]">👋</span>
        <div className="ml-6">
          <p>Hello, I'm</p>
          <h1>Tolgahan</h1>
        </div>
      </div>

      <div className="badge flex items-center bg-badge px-6 py-3 rounded-xl text-lg xs:text-[22px] text-lightB font-medium font-poppins md:absolute md:top-1/4 md:right-10 xxs:relative xxs:top-0 xxs:right-0">
        <span className="text-[25px] xs:text-[32px]">👨‍💻</span>
        <div className="ml-6">
          <p>I'm Frontend Dev.</p>
          <p>Based Türkiye</p>
        </div>
      </div>

      <div className="badge flex flex-row items-center font-poppins justify-center gap-x-5 bg-badge px-6 py-3 rounded-xl text-lightB text-center md:absolute md:bottom-[120px] md:left-60">
        <a
          href="https://twitter.com/tolgakodluyor"
          target="_self"
          referrerPolicy="no-referrer"
          className="transition duration-500 hover:text-[#1da1f2]"
        >
          <FaTwitter fontSize={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/tolgahant/"
          target="_self"
          referrerPolicy="no-referrer"
          className="transition duration-500 hover:text-[#0a5881]"
        >
          <FaLinkedinIn fontSize={22} />
        </a>
        <a
          href="https://github.com/tolgahantolu"
          target="_self"
          referrerPolicy="no-referrer"
          className="transition duration-500 hover:text-[#000]"
        >
          <FaGithub fontSize={22} />
        </a>
      </div>

      <div className="badge md:flex flex-row items-center font-poppins justify-center gap-x-5 bg-badge px-6 py-3 rounded-xl text-[22px] text-lightB text-center md:absolute md:bottom-[60px] md:right-[200px] hidden">
        <span>
          <FaReact fontSize={25} />
        </span>
        <span>
          <SiRedux fontSize={22} />
        </span>
        <span>
          <SiMongodb fontSize={23} />
        </span>
        <span>
          <SiApollographql fontSize={23} />
        </span>
        <span>
          <TbBrandTailwind fontSize={25} />
        </span>
        <span>
          <FaSass fontSize={25} />
        </span>
      </div>
    </div>
  );
};

export default Hero;
