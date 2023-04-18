import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { AiOutlineCaretRight } from "react-icons/ai";

const Portfolio = ({ projects }) => {
  return (
    <section className="quote sm:py-20 py-10 w-full h-full" id="works">
      <div className="font-poppins leading-[50px] flex justify-center items-center gap-3 capitalize">
        <h1 className="font-semibold text-headline sm:text-5xl text-[40px]">
          My Creative <span className="text-gradient">Portfolio</span> Section
        </h1>
        <Link
          href="/projects"
          className="px-4 py-2 rounded-full text-base sm:text-lg bg-gradient-to-r from-dimGreen to-green flex items-center gap-1"
        >
          see all projects <AiOutlineCaretRight />
        </Link>
      </div>
      <div className="mt-10 grid gap-4 xxs:grid-cols-1 xs:max-w-[80%] xs:mx-auto sm:max-w-[60%] md:max-w-full md:mx-none md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <>
            {project.featuredProject && (
              <ProjectCard key={i} index={i} {...project} />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
