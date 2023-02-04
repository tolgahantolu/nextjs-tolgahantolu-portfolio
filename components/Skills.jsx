import {
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiApollographql,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { CgNpm } from "react-icons/cg";

const Skills = ({ experiences }) => {
  return (
    <section className="sm:py-20 py-10 w-full h-full" id="skills">
      <h1 className="font-poppins font-semibold text-headline sm:text-5xl text-[40px] leading-[50px]  text-center">
        Skills <span className="text-gradient"> & </span> Experience
      </h1>
      <div className="mt-10 flex md:flex-row flex-col gap-5">
        {/* skills side */}
        <div className="bg-black-gradient rounded-xl px-10 py-12 flex-1 grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-5">
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[50px] text-[#f7df1e] ">
                <DiJavascript1 />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">
              Javascript
            </p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#00d8ff] ">
                <FaReact />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">React JS</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[50px] text-[#000]">
                <TbBrandNextjs />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Next JS</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#381EA0]">
                <SiApollographql />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Apollo</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[50px] text-[#E00097]">
                <SiGraphql />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">GraphQL</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#593D88] ">
                <SiRedux />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Redux</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#ff9500] ">
                <IoLogoFirebase />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Firebase</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[50px] text-[#589636] ">
                <DiMongodb />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">MongoDB</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#38BDF8] ">
                <SiTailwindcss />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">
              TailwindCSS
            </p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[50px] text-[#7211F5] ">
                <FaBootstrap />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Bootstrap</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#CF649A] ">
                <FaSass />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">SASS</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[50px] text-[#cb3837] ">
                <CgNpm />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">NPM</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-[#F54D27] ">
                <FaGitAlt />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Git</p>
          </div>
          {/* skill */}
          <div className="flex flex-col gap-y-2 items-center">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-headline">
              <span className="text-[45px] text-lightB ">
                <FaFigma />
              </span>
            </div>
            <p className="text-paragraph font-poppins text-[15px]">Figma</p>
          </div>
        </div>

        {/* experience side */}
        <div className="rounded-xl md:px-10 px-0 md:py-12 py-5 flex-1 flex flex-col gap-y-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-row gap-x-5 skill-card p-6 rounded-[20px]"
            >
              <p className="sm:text-2xl text-xl text-gradient font-semibold">
                {exp.year}
              </p>
              <div className="flex flex-col gap-y-1">
                <p className="text-headline smtext-lg text-base">{exp.title}</p>
                <p className="text-paragraph sm:text-sm text-[12px]">
                  {exp.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
